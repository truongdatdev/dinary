import { IQuery } from '@nestjs/cqrs';
import { BaseQueryDTO } from '@dinary/core';
import { DocumentCategory } from '../entities/document-category.entity';

export class GetDocumentCategoriesQuery implements IQuery {
	public static readonly type = '[Document Categories] Get All';
	constructor(public readonly params: BaseQueryDTO<DocumentCategory>) {}
}
