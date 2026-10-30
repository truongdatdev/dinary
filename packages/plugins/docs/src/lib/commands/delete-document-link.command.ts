import { ICommand } from '@nestjs/cqrs';
import { ID } from '@dinary/contracts';

export class DeleteDocumentLinkCommand implements ICommand {
	public static readonly type = '[Document Link] Delete';
	constructor(public readonly id: ID) {}
}
