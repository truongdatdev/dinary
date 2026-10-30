import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { PluginSetting } from '../entities/plugin-setting.entity';

export class MikroOrmPluginSettingRepository extends MikroOrmBaseEntityRepository<PluginSetting> {}
