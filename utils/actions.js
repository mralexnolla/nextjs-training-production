'use server'
import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

// view all task
export const getAllTasks = async () => {
    return prisma.task.findMany({
        orderBy: {
            createdAT: 'desc'
        }
    })
}

// create task
export const createTask = async (formData) => {
    const content = formData.get('content')
    // we can do some validations here 

    await prisma.task.create({
        data: {
            content,
        }
    })
    //revalidate path
    revalidatePath('/tasks')
}

// create task custome
import { z } from 'zod'

export const createTaskCustome = async (prevState, formData) => {
     await new Promise((resolve) => setTimeout(resolve, 2000))
    const content = formData.get('content')
    // we can do some validations here 

    const Task = z.object({
        content: z.string().min(5)
    })

    try {

        Task.parse({
            content
        })

        await prisma.task.create({
          data: {
            content,
          },
        });

        //revalidate path
        revalidatePath("/tasks");
        return { message: "success" };
    } catch (error) {
        console.log(error.errors[0])
        return { message: error.errors[0].message };
    }
      
    
}

//delete task

export const deleteTask = async (formData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const id = formData.get('id')
    await prisma.task.delete({
      where: {
        id,
      }
    })

    revalidatePath('tasks')
}

// get a single task

export const getTask = async (id) => {
    return prisma.task.findUnique({
        where: {
            id,
        }
    })
}

//edit a task

export const editTask = async (formData) => {
    const id = formData.get('id')
    const content = formData.get('content')
    const completed = formData.get('completed')

    await prisma.task.update({
        where : {
            id,
        },
        data: {
            content,
            completed: completed === 'on' ? true : false
        }
    })

    redirect('/tasks')
}
