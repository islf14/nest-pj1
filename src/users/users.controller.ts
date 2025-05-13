import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Get all Users' })
  @Get()
  getAllUsers() {
    return this.usersService.getUsers();
  }

  @ApiOperation({ summary: 'Create a User' })
  @Post()
  // @UsePipes(new ValidationPipe())
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }
}
