import { Module } from '@nestjs/common';
import { CmsService } from './cms.service';
import { CmsController } from './cms.controller';

@Module({
  controllers: [CmsController],
  providers: [CmsService],
})
export class CmsModule {}
