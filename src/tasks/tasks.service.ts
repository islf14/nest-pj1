import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

export interface User {
  name: string;
  age: number;
}

@Injectable()
export class TasksService {
  private tasks = [];

  getTasks(): User {
    return {
      name: 'Pablo',
      age: 40,
    };
  }

  getTask(id: number) {
    // const taskFound = this.tasks.find((task) => task.id === id);
    const taskFound = null;
    if (!taskFound) {
      return new NotFoundException(`Task with id ${id} not found`);
    }
    return taskFound;
  }

  createTask(task: CreateTaskDto) {
    console.log(task);
    // this.tasks.push({
    //   ...task,
    //   id: this.tasks.length + 1,
    // });
    return task;
  }

  updateTask() {
    return 'updating task';
  }

  deleteTask() {
    return 'deleting task';
  }

  updateStatusTask() {
    return 'updating status task';
  }
}
