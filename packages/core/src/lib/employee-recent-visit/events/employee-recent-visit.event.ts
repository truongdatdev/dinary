import { IEvent } from '@nestjs/cqrs';
import { IEmployeeRecentVisitInput } from '@dinary/contracts';

export class EmployeeRecentVisitEvent implements IEvent {
	constructor(public readonly input: IEmployeeRecentVisitInput) {}
}
