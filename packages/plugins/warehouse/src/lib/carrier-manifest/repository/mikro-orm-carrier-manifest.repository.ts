import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { CarrierManifest } from '../carrier-manifest.entity';

@Injectable()
export class MikroOrmCarrierManifestRepository extends MikroOrmBaseEntityRepository<CarrierManifest> {}
