import { IEvent } from '@nestjs/cqrs';
import { IEmployeeNotificationCreateInput } from '@dinary/contracts';

export class EmployeeCreateNotificationEvent implements IEvent {
	constructor(public readonly input: IEmployeeNotificationCreateInput) {}
}
