import { Body, Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor (private readonly usersService: UsersService) {}

  @Get('/list')
  getUsers (): object[] {
    return this.usersService.getUsers()
  }

  @Get('/:id')
  getUser (id: number): object | string {
    return this.usersService.getUser(id)
  }

  @Post()
  createUser (@Body() newUser: any): string {
    console.log(newUser)
    return 'guardando tarea...'
    // this.tasksService.createTask()
  }

  @Put()
  updateUser (): string {
    return 'actualizando tarea...'
  }

  @Delete()
  deleteUser (): string {
    return 'eliminando tarea...'
  }

  @Patch()
  patchUser (): string {
    return 'actualizando status de tarea...'
  }
}
