import { ICommand } from '@nestjs/cqrs';
import { ITimerToggleInput } from '@dinary/contracts';

export class StartTimerCommand implements ICommand {
	constructor(public readonly input: ITimerToggleInput) {}
}
