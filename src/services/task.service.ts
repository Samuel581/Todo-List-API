import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });

export const createTask = (data: {userId: string, tittle: string, description: string}) => {
    const {userId, tittle, description} = data;
    const newTask = prisma.tasks.create({
        data: {
            tittle, 
            description,
            user: {
                connect: {id: userId}
            }
        }
    })
    return newTask;
}

export const getTasks = (userId: string) => {
    const tasks = prisma.tasks.findMany({
        where: {
            userId
        }
    })
    return tasks;
}

