import { IEvent } from '@nestjs/cqrs';
import { IEntitySubscriptionCreateInput } from '@dinary/contracts';

export class CreateEntitySubscriptionEvent implements IEvent {
	constructor(readonly input: IEntitySubscriptionCreateInput) {}
}
