import { ICommand } from '@nestjs/cqrs';
import { IProcessTrackingDataInput } from '@dinary/contracts';

export class ProcessTrackingDataCommand implements ICommand {
	static readonly type = '[Custom Tracking] Process Tracking Data';

	constructor(public readonly input: IProcessTrackingDataInput) {}
}
