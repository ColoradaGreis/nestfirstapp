import { Body, Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common'
import { TasksService } from './tasks.service'

// acá defino las rutas de tasks
@Controller('tasks')
export class TasksController {
  tasksService: TasksService // creo una propiedad tasksService de tipo TasksService
  // inyecto el servicio
  constructor (tasksService: TasksService) { // tasksService es del tipo TaksService
    this.tasksService = tasksService
    // un constructor es un método que se ejecuta primero cuando se crea una instancia de la clase
  }

  @Get('/list')
  getAllTasks (): object[] {
    // puedo buscar en una db o en un servicio
    // es decir la lógica se puede generar acá pero por lo general
    // se hace en un servicio ya que puede volver a reutilizarse (servicio)
    return this.tasksService.getAllTasks()
  }

  @Get('/')
  index (): string {
    return 'Página principal de tareas'
  }

  @Post()
  createTask (@Body() newTask: any): string {
    console.log(newTask)
    return 'guardando tarea...'
    // this.tasksService.createTask()
  }

  @Put()
  updateTask (): string {
    return 'actualizando tarea...'
  }

  @Delete()
  deleteTask (): string {
    return 'eliminando tarea...'
  }

  @Patch()
  patchTask (): string {
    return 'actualizando status de tarea...'
  }
}
