import { IIntegrationMapSyncEntity, ITagCreateInput, ITagUpdateInput, IntegrationEntity } from '@dinary/contracts';

export class AutomationLabelSyncCommand {
	constructor(
		public readonly input: IIntegrationMapSyncEntity<ITagCreateInput | ITagUpdateInput>,
		public readonly entity: IntegrationEntity
	) {}
}
