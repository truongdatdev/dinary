import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { GoodsReceipt } from '../goods-receipt.entity';

@Injectable()
export class MikroOrmGoodsReceiptRepository extends MikroOrmBaseEntityRepository<GoodsReceipt> {}
