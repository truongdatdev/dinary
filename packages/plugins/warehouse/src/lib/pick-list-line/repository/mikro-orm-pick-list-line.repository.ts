import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { PickListLine } from '../pick-list-line.entity';

@Injectable()
export class MikroOrmPickListLineRepository extends MikroOrmBaseEntityRepository<PickListLine> {}
