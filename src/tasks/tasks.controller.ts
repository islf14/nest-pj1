import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  tasksServices: TasksService;
  constructor(tasksService: TasksService) {
    this.tasksServices = tasksService;
  }

  @Get()
  getAllTasks(@Query() query: any) {
    console.log(query);
    return this.tasksServices.getTasks();
  }

  @Get('/:id')
  getTask(@Param('id') id: number) {
    return this.tasksServices.getTask(id);
  }

  @Post()
  // @UsePipes(new ValidationPipe())
  createTask(@Body() task: CreateTaskDto) {
    return this.tasksServices.createTask(task);
  }

  @Put()
  updateTask() {
    return this.tasksServices.updateTask();
  }

  @Delete()
  deleteTask() {
    return this.tasksServices.deleteTask();
  }

  @Patch()
  updateStatusTask() {
    return this.tasksServices.updateStatusTask();
  }
}
