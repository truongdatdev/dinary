import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { PickWave } from '../pick-wave.entity';

@Injectable()
export class MikroOrmPickWaveRepository extends MikroOrmBaseEntityRepository<PickWave> {}
