import { Injectable } from '@nestjs/common';
import { CreateBlocklyDto } from './dto/create-blockly.dto';
import { UpdateBlocklyDto } from './dto/update-blockly.dto';

@Injectable()
export class BlocklyService {
  create(createBlocklyDto: CreateBlocklyDto) {
    return 'This action adds a new blockly';
  }

  findAll() {
    return `This action returns all blockly`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blockly`;
  }

  update(id: number, updateBlocklyDto: UpdateBlocklyDto) {
    return `This action updates a #${id} blockly`;
  }

  remove(id: number) {
    return `This action removes a #${id} blockly`;
  }
}
