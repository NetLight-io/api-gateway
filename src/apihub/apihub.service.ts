import { Injectable } from '@nestjs/common';
import { CreateApihubDto } from './dto/create-apihub.dto';
import { UpdateApihubDto } from './dto/update-apihub.dto';

@Injectable()
export class ApihubService {
  create(createApihubDto: CreateApihubDto) {
    return 'This action adds a new apihub';
  }

  findAll() {
    return `This action returns all apihub`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apihub`;
  }

  update(id: number, updateApihubDto: UpdateApihubDto) {
    return `This action updates a #${id} apihub`;
  }

  remove(id: number) {
    return `This action removes a #${id} apihub`;
  }
}
