import { PartialType } from '@nestjs/mapped-types';
import { CreateBlocklyDto } from './create-blockly.dto';

export class UpdateBlocklyDto extends PartialType(CreateBlocklyDto) {}
