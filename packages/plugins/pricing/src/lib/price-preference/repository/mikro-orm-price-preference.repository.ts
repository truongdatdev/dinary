import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { PricePreference } from '../price-preference.entity';

export class MikroOrmPricePreferenceRepository extends MikroOrmBaseEntityRepository<PricePreference> {}
