import { IntegrationTenant } from '@dinary/core';

export class GithubInstallationDeleteCommand {
	constructor(public readonly integration: IntegrationTenant) {}
}
