import { IGetTaskOptions, ITask } from '@dinary/contracts';

export class GithubTaskUpdateOrCreateCommand {
	constructor(public readonly task: ITask, public readonly options: IGetTaskOptions) {}
}
