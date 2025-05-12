import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { HelloPipe } from './hello.pipe';
import { HelloGuard } from './hello.guard';

@Controller('/hello')
export class HelloController {
  @Get()
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    response.status(200).json({
      message: 'hello world!!',
    });
  }

  @Get('notfound')
  @HttpCode(404)
  notFoundPage() {
    return '404 not found page :)';
  }

  @Get('ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    return num + 1;
  }

  @Get('active/:status')
  isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
    return typeof status;
  }

  @Get('greet')
  @UseGuards(HelloGuard)
  greet(
    @Query('name') name: string,
    @Query('age', new HelloPipe()) age: number,
  ) {
    console.log(typeof name);
    console.log(typeof age);
    return `Hello ${name} with age ${age}`;
  }
}
