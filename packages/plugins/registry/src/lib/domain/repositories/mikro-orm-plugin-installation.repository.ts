import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { PluginInstallation } from '../entities/plugin-installation.entity';

export class MikroOrmPluginInstallationRepository extends MikroOrmBaseEntityRepository<PluginInstallation> {}
