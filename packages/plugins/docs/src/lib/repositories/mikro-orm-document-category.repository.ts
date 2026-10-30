import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { DocumentCategory } from '../entities/document-category.entity';

export class MikroOrmDocumentCategoryRepository extends MikroOrmBaseEntityRepository<DocumentCategory> {}
