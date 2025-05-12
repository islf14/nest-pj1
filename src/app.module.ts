import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { HelloModule } from './hello/hello.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [TasksModule, UsersModule, ProjectsModule, HelloModule, PaymentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
