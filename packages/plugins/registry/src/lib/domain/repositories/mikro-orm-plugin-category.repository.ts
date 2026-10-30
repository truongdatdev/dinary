import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { PluginCategory } from '../entities/plugin-category.entity';

export class MikroOrmPluginCategoryRepository extends MikroOrmBaseEntityRepository<PluginCategory> {}
