import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { Video } from '../entities/video.entity';

export class MikroOrmVideoRepository extends MikroOrmBaseEntityRepository<Video> {}
