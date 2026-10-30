import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { FulfillmentLine } from '../fulfillment-line.entity';

@Injectable()
export class MikroOrmFulfillmentLineRepository extends MikroOrmBaseEntityRepository<FulfillmentLine> {}