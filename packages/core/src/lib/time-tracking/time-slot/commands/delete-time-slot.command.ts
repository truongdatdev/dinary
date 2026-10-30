import { ICommand } from '@nestjs/cqrs';
import { IDeleteTimeSlot } from '@dinary/contracts';

export class DeleteTimeSlotCommand implements ICommand {
	static readonly type = '[TimeSlot] delete';

	constructor(public readonly options: IDeleteTimeSlot) {}
}
