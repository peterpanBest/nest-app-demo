import { Controller, Get, Post, Body } from '@nestjs/common';
import { Request } from "express";
import { AppService } from './app.service';
import { json } from 'body-parser';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("test")
  test(@Body() req: Request) {
    let _req = JSON.parse(req.toString());
    let _user = _req.user;
    return {
      test: _user
    }
  }

}
