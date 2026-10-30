import { ICommand } from '@nestjs/cqrs';
import { IReactionUpdateInput, ID } from '@dinary/contracts';

export class ReactionUpdateCommand implements ICommand {
	static readonly type = '[Reaction] Update';

	constructor(public readonly id: ID, public readonly input: IReactionUpdateInput) {}
}
