import { PartialType } from '@nestjs/mapped-types';
import { CreateApihubDto } from './create-apihub.dto';

export class UpdateApihubDto extends PartialType(CreateApihubDto) {}
