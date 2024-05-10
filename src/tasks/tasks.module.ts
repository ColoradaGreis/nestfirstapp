import { Module } from '@nestjs/common'
import { TasksController } from './tasks.controller'
import { TasksService } from './tasks.service'

// acá se importa el controlador y el servicio de tasks
// indico lo que voy a estar importando
@Module({
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
