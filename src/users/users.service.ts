import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  // private users: CreateUserDto[] = [];
  constructor(private prisma: PrismaService) {}

  getUsers() {
    // return this.users;
    return this.prisma.user.findMany();
  }

  createUser(user: CreateUserDto) {
    // this.users.push(user);
    // return user;
    return this.prisma.user.create({ data: user });
  }
}
