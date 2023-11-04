import { Module } from '@nestjs/common';
import { ApihubService } from './apihub.service';
import { ApihubController } from './apihub.controller';

@Module({
  controllers: [ApihubController],
  providers: [ApihubService],
})
export class ApihubModule {}
