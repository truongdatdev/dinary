import { ICommand } from '@nestjs/cqrs';
import { ID } from '@dinary/contracts';

export class UnarchiveDocumentCommand implements ICommand {
	public static readonly type = '[Document] Unarchive';
	constructor(public readonly id: ID) {}
}
