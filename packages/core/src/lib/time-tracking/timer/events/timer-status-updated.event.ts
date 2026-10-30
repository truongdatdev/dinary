import { IEvent } from '@nestjs/cqrs';
import { ITimerStatus } from '@dinary/contracts';

export class TimerStatusUpdatedEvent implements IEvent {
	constructor(public readonly status: ITimerStatus) {}
}
