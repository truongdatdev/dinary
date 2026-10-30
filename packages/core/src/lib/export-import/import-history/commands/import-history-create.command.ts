import { ICommand } from '@nestjs/cqrs';
import { IImportHistory } from '@dinary/contracts';

export class ImportHistoryCreateCommand implements ICommand {
	static readonly type = '[Create] Import History';

	constructor(
		public readonly input: IImportHistory
	) { }
}
