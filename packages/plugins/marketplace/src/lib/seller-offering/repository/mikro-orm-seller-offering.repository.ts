import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { SellerOffering } from '../seller-offering.entity';

/**
 * The MikroORM side of the SellerOffering aggregate.
 */
@Injectable()
export class MikroOrmSellerOfferingRepository extends MikroOrmBaseEntityRepository<SellerOffering> {}