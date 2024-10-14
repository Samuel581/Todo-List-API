import { IsEmail, IsString, Length } from "class-validator";

export class createUserDTO {
    @IsEmail({}, { message: 'Invalid email' })
    email: string;

    @IsString()
    @Length(5, 50)
    password: string;

    @IsString()
    @Length(5, 50)
    name: string;
}

export class loginUserDTO {
    @IsEmail({}, { message: 'Invalid email' })
    email: string;

    @IsString()
    @Length(5, 50)
    password: string;
}