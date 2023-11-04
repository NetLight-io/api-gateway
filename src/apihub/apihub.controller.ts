import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, Req} from '@nestjs/common';
import { ApihubService } from './apihub.service';
import { CreateApihubDto } from './dto/create-apihub.dto';
import { UpdateApihubDto } from './dto/update-apihub.dto';
import { ClientProxy, Client, Transport } from '@nestjs/microservices';

@Controller('apihub')
export class ApihubController {
  constructor(private readonly apihubService: ApihubService) {}
  
  @Client({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'api_hub_queue',
    },
  })
  client: ClientProxy;
  
  @Post()
  create(@Body() createApihubDto: CreateApihubDto) {
    return this.apihubService.create(createApihubDto);
  }

  @Get()
  findAll() {
    return this.apihubService.findAll();
  }

  @Get('data')
  async getData(@Req() req) {
    let user = req.user;
    if (user['role'] == 'Admin'){
      return this.client.send('hcapcha', {
        base64: user['_id']
      });
    }
    return {
      message: 'Unauthorized'
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apihubService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApihubDto: UpdateApihubDto) {
    return this.apihubService.update(+id, updateApihubDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apihubService.remove(+id);
  }
}
