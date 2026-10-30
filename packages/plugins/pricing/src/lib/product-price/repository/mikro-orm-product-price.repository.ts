import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { ProductPrice } from '../product-price.entity';

export class MikroOrmProductPriceRepository extends MikroOrmBaseEntityRepository<ProductPrice> {}
