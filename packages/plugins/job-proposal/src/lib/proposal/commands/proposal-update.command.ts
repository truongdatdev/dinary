import { ICommand } from '@nestjs/cqrs';
import { IProposal, IProposalCreateInput as IProposalUpdateInput } from '@dinary/contracts';

export class ProposalUpdateCommand implements ICommand {
	static readonly type = '[Proposal] Update Proposal';

	constructor(
		public readonly id: IProposal['id'],
		public readonly input: IProposalUpdateInput
	) { }
}
