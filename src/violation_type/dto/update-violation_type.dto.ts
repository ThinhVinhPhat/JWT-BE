import { PartialType } from '@nestjs/mapped-types';
import { CreateViolationTypeDto } from './create-violation_type.dto';

export class UpdateViolationTypeDto extends PartialType(CreateViolationTypeDto) {}