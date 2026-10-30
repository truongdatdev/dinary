import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { Changelog } from '../changelog.entity';

export class MikroOrmChangelogRepository extends MikroOrmBaseEntityRepository<Changelog> { }
