import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlocklyService } from './blockly.service';
import { CreateBlocklyDto } from './dto/create-blockly.dto';
import { UpdateBlocklyDto } from './dto/update-blockly.dto';

@Controller('blockly')
export class BlocklyController {
  constructor(private readonly blocklyService: BlocklyService) {}

  @Post()
  create(@Body() createBlocklyDto: CreateBlocklyDto) {
    return this.blocklyService.create(createBlocklyDto);
  }

  @Get()
  findAll() {
    return this.blocklyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blocklyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlocklyDto: UpdateBlocklyDto) {
    return this.blocklyService.update(+id, updateBlocklyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blocklyService.remove(+id);
  }
}
