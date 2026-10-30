import { ICommand } from '@nestjs/cqrs';
import { ID, ITimeSlot } from '@dinary/contracts';

export class UpdateTimeSlotCommand implements ICommand {
	static readonly type = '[TimeSlot] update';

	constructor(public readonly id: ID, public readonly input: Partial<ITimeSlot>) {}
}
