import { IQuery } from '@nestjs/cqrs';
import { ITimerStatusInput } from '@dinary/contracts';

export class GetTimerStatusQuery implements IQuery {
	constructor(public readonly input: ITimerStatusInput) {}
}
