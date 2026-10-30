import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { TaxCategory } from '../tax-category.entity';

export class MikroOrmTaxCategoryRepository extends MikroOrmBaseEntityRepository<TaxCategory> {}
