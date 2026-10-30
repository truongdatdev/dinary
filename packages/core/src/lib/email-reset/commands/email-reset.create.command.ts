import { ICommand } from '@nestjs/cqrs';
import { IEmailResetCreateInput } from '@dinary/contracts';

export class EmailResetCreateCommand implements ICommand {
	static readonly type = '[Email Reset] Create';

	constructor(
		public readonly input: IEmailResetCreateInput
	) { }
}
