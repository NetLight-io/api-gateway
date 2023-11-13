import { Module } from '@nestjs/common';
import { BlocklyService } from './blockly.service';
import { BlocklyController } from './blockly.controller';

@Module({
  controllers: [BlocklyController],
  providers: [BlocklyService],
})
export class BlocklyModule {}
