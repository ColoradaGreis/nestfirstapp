import { Injectable } from '@nestjs/common'
import { type Task, TaskStatus } from './task.entity'
import { v4 as uuid } from 'uuid'

@Injectable()
export class TasksService {
  private tasks: Task[] = [{
    id: '1',
    title: 'Task 1',
    description: 'Task 1 description',
    status: TaskStatus.PENDING
  }]

  getAllTasks (): object[] {
    return this.tasks
  }

  createTask (title: string, description: string): object {
    const task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.PENDING
    }
    this.tasks.push(task)
    return task
  }

  updateTask () {}
  deleteTask () {}
}
