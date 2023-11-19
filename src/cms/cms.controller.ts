import { Controller,Get, Req } from '@nestjs/common';
import { CmsService } from './cms.service';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';

@Controller('cms')
export class CmsController {
  constructor(private readonly cmsService: CmsService) {}

  @Client({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'cms_queue',
    },
  })
  client: ClientProxy;

  @Get()
  async getData(@Req() req) {
    let payload = new CalPayload();
    payload.a = req.query.a;
    payload.b = req.query.b;
    payload.userID = "123"
    let total = this.client.send('cal', payload);
    return total
  }
}

export class CalPayload implements  ICalPayload {
  a: number
  b: number
  userID: string
}

export interface ICalPayload {
  a: number,
  b: number,
  userID: string,
}
