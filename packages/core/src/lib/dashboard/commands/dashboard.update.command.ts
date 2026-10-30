import { ICommand } from '@nestjs/cqrs';
import { ID, IDashboardUpdateInput } from '@dinary/contracts';

export class DashboardUpdateCommand implements ICommand {
	static readonly type = '[Dashboard] Update';

	constructor(public readonly id: ID, public readonly input: IDashboardUpdateInput) {}
}
