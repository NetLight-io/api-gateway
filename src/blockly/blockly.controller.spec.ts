import { Test, TestingModule } from '@nestjs/testing';
import { BlocklyController } from './blockly.controller';
import { BlocklyService } from './blockly.service';

describe('BlocklyController', () => {
  let controller: BlocklyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlocklyController],
      providers: [BlocklyService],
    }).compile();

    controller = module.get<BlocklyController>(BlocklyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
