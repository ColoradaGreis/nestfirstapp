import { Module } from '@nestjs/common'
import { TasksModule } from './tasks/tasks.module'
import { ProjectsModule } from './projects/projects.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { ProjectController } from './project/project.controller'
import { TasksService } from './tasks/tasks.service'

@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule],
  controllers: [ProjectController],
  providers: [TasksService]
})
export class AppModule {}
