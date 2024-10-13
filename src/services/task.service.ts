import { Prisma, PrismaClient } from "@prisma/client";

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

export const getTaskById = (id: string) => {
    const task = prisma.tasks.findUnique({
        where: {
            id
        }
    })
    return task;
}

export const updateTask = (id : string, data: Partial<{
    tittle: string,
    description: string
}>) => {
    const updateData: Prisma.tasksUpdateInput = {};

    if(data.tittle!==undefined) updateData.tittle = data.tittle;
    if(data.description!==undefined) updateData.description = data.description

    const updatedBlog = prisma.tasks.update({
        where: {
            id : id
        },
        data: updateData
    })

    return updatedBlog;
}

export const deleteTask = (id: string) => {
    const deletedTask = prisma.tasks.delete({
        where: {
            id
        }
    })
    return deletedTask;
}

