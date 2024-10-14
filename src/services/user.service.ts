import { Prisma, PrismaClient } from "@prisma/client";
import { comparePassword, hashPassword } from "../utils/hashUtils";
import { InvalidCredentialsError, NotFoundError } from "../utils/errors";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });

export const createUser = async (data: {name:string, email: string, password: string}) => {
    var { name, email, password } = data;
    const hashedPassword: string = await hashPassword(password);
    password = hashedPassword;
    const newUser = await prisma.users.create({
        data: {
            name,
            email,  
            password
        }
    })
    return newUser;
}

export const getUserByEmail = async (email: string) => {
    const user = await prisma.users.findUnique({
        where: {
            email
        }
    })
    return user;
}

export const authenticateUser = async (email: string, password: string) => {
    const user = await prisma.users.findUnique({where: {email}});
    if(!user) throw new NotFoundError("User don't found")

    const isMatch = await comparePassword(password, user.password);
    if(!isMatch) throw new InvalidCredentialsError("Bad credentials");

    const token = jwt.sign(
        {userId: user.id}, 
        `${process.env.JWT_SECRET}`, 
        {expiresIn: "1h"},
    )

    return {token, user};
}