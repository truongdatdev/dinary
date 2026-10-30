import { IEvent } from '@nestjs/cqrs';
import { IMentionCreateInput } from '@dinary/contracts';

export class CreateMentionEvent implements IEvent {
	constructor(public readonly input: IMentionCreateInput) {}
}
