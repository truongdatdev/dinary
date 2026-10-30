import { ICommand } from '@nestjs/cqrs';
import { ITaskLinkedIssueCreateInput } from '@dinary/contracts';

export class TaskLinkedIssueCreateCommand implements ICommand {
	static readonly type = '[Task Linked Issue] Create';

	constructor(public readonly input: ITaskLinkedIssueCreateInput) {}
}
