import { registerAs } from '@nestjs/config';
import { IJiraIntegrationConfig } from '@dinary/common';

/**
 * Register Jira configuration using @nestjs/config
 */
export default registerAs(
	'jira',
	(): IJiraIntegrationConfig => ({
		appName: process.env.DINARY_JIRA_APP_NAME,
		appDescription: process.env.DINARY_JIRA_APP_DESCRIPTION,
		appKey: process.env.DINARY_JIRA_APP_KEY,
		baseUrl: process.env.DINARY_JIRA_APP_BASE_URL,
		vendorName: process.env.DINARY_JIRA_APP_BASE_VENDOR_NAME,
		vendorUrl: process.env.DINARY_JIRA_APP_BASE_VENDOR_URL
	})
);
