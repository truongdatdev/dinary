import { ICommand } from '@nestjs/cqrs';
import { ID, IEquipmentSharingUpdateInput } from '@dinary/contracts';

export class EquipmentSharingUpdateCommand implements ICommand {
	static readonly type = '[EquipmentSharing] Update';

	constructor(public readonly id: ID, public readonly input: IEquipmentSharingUpdateInput) {}
}
