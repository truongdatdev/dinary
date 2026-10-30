import { ICommand } from '@nestjs/cqrs';
import { IScreeningTaskCreateInput } from '@dinary/contracts';

export class ScreeningTaskCreateCommand implements ICommand {
	static readonly type = '[ScreeningTask] Create';

	constructor(public readonly input: IScreeningTaskCreateInput) {}
}
