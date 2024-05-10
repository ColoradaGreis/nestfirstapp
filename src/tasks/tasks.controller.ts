import { Body, Controller, Get, Post } from '@nestjs/common'
import { TasksService } from './tasks.service'

@Controller('tasks')
export class TasksController {
  constructor (private readonly tasksService: TasksService) {}
  @Get()
  getAllTasks (): object[] {
    return this.tasksService.getAllTasks()
  }

  @Post()
  createTask (@Body() newTask: any): string {
    console.log(newTask)
    return 'guardando tarea...'
    // this.tasksService.createTask()
  }
}
