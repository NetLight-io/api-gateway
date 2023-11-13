import { Test, TestingModule } from '@nestjs/testing';
import { BlocklyService } from './blockly.service';

describe('BlocklyService', () => {
  let service: BlocklyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlocklyService],
    }).compile();

    service = module.get<BlocklyService>(BlocklyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
