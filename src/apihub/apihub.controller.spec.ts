import { Test, TestingModule } from '@nestjs/testing';
import { ApihubController } from './apihub.controller';
import { ApihubService } from './apihub.service';

describe('ApihubController', () => {
  let controller: ApihubController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApihubController],
      providers: [ApihubService],
    }).compile();

    controller = module.get<ApihubController>(ApihubController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
