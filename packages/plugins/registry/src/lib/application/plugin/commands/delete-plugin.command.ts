import { ID } from '@dinary/contracts';
import { ICommand } from '@nestjs/cqrs';

export class DeletePluginCommand implements ICommand {
	public static readonly type = '[Plugin] Delete';
	constructor(public readonly pluginId: ID) {}
}
