import { IntersectionType, PartialType } from '@nestjs/swagger';
import { ITagUpdateInput } from '@dinary/contracts';
import { CreateTagDTO } from './create-tag.dto';

export class UpdateTagDTO extends IntersectionType(PartialType(CreateTagDTO)) implements ITagUpdateInput {}
