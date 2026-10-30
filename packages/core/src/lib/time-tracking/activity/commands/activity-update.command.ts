import { ICommand } from '@nestjs/cqrs';
import { IActivity } from '@dinary/contracts';

export class ActivityUpdateCommand implements ICommand {
	static readonly type = '[Activity] Update';

	constructor(
		public readonly input: IActivity
	) {}
}
