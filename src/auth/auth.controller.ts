import { Controller, Get, UseGuards, Request, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService){}
  
  @Client({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'auth_queue',
    },
  })
  client: ClientProxy;

  @Post('login')
  async login(@Request() req) {
    return "1";
  }

  @Get('google')
  async googleLogin(@Request() req) {
    let token = req.query.token;
    let payload = new GooglePayLoad();
    payload.token = token;
    return this.client.send("google",payload);
  }

  @UseGuards(AuthGuard('oauth2'))
  @Get('profile')
  async getData(@Request() req) {
    return ""
  }
}
class GooglePayLoad implements IGooglePayload {
  token: string
}
export interface IGooglePayload {
  token: string
}