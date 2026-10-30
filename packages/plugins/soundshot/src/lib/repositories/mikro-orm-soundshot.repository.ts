import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { Injectable } from '@nestjs/common';
import { Soundshot } from '../entity/soundshot.entity';

@Injectable()
export class MikroOrmSoundshotRepository extends MikroOrmBaseEntityRepository<Soundshot> {}
