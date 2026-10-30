import { ICommand } from '@nestjs/cqrs';
import { ID } from '@dinary/contracts';
import { UpdateDocumentContentDTO } from '../dto';

export class UpdateDocumentContentCommand implements ICommand {
	public static readonly type = '[Document] Update Content';
	constructor(public readonly id: ID, public readonly input: UpdateDocumentContentDTO) {}
}
