import { IIntegrationMapSyncEntity, ITaskCreateInput, ITaskUpdateInput, IntegrationEntity } from '@dinary/contracts';

export class AutomationTaskSyncCommand {
	constructor(
		public readonly input: IIntegrationMapSyncEntity<ITaskCreateInput | ITaskUpdateInput>,
		public readonly entity: IntegrationEntity
	) {}
}
