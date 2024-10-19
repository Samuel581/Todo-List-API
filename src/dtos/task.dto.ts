import { IsString, IsNotEmpty, Length, IsOptional } from "class-validator";

export class createTaskDTO {
    @IsNotEmpty()
    @IsString()
    @Length(5, 50)
    tittle: string
    
    @Length(20, 500)
    @IsString()
    @IsNotEmpty()
    description: string
}

export class updateTaskDTO {
    @IsString()
    @Length(5, 50)
    @IsOptional()
    tittle?: string
    
    @Length(50, 500)
    @IsString()
    @IsOptional()
    description?: string
}
