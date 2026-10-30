import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { Document } from '../entities/document.entity';

export class MikroOrmDocumentRepository extends MikroOrmBaseEntityRepository<Document> {}
