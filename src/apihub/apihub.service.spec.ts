import { Test, TestingModule } from '@nestjs/testing';
import { ApihubService } from './apihub.service';

describe('ApihubService', () => {
  let service: ApihubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApihubService],
    }).compile();

    service = module.get<ApihubService>(ApihubService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
