import { ICommand } from '@nestjs/cqrs';
import { ITimerToggleInput } from '@dinary/contracts';

export class StopTimerCommand implements ICommand {
	constructor(public readonly input: ITimerToggleInput) {}
}
