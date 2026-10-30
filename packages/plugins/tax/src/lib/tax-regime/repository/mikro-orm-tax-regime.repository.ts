import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { TaxRegime } from '../tax-regime.entity';

export class MikroOrmTaxRegimeRepository extends MikroOrmBaseEntityRepository<TaxRegime> {}
