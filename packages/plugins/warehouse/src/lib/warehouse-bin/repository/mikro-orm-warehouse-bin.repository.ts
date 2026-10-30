import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { WarehouseBin } from '../warehouse-bin.entity';

@Injectable()
export class MikroOrmWarehouseBinRepository extends MikroOrmBaseEntityRepository<WarehouseBin> {}
