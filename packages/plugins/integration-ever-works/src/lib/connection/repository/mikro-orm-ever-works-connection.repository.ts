import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { EverWorksConnection } from '../ever-works-connection.entity';

@Injectable()
export class MikroOrmEverWorksConnectionRepository extends MikroOrmBaseEntityRepository<EverWorksConnection> {}
