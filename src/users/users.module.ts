import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersMiddleware } from './users.middleware';
import { AuthMiddleware } from './middleware/auth/auth.middleware';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UsersMiddleware)
      .forRoutes(
        { path: '/users', method: RequestMethod.GET },
        { path: '/users', method: RequestMethod.POST },
      )
      .apply(AuthMiddleware)
      .forRoutes('users');
  }
}
