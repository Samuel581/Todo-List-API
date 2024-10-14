import { IsString, IsNotEmpty, Length } from "class-validator";

export class createTaskDTO {
    @IsNotEmpty()
    @IsString()
    @Length(5, 50)
    tittle: string
    
    @Length(50, 500)
    @IsString()
    @IsNotEmpty()
    description: string
}