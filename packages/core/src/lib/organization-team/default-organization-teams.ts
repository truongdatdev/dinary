import { environment } from '@dinary/config';

export const DEFAULT_ORGANIZATION_TEAMS = [
	{
		name: 'Employees',
		defaultMembers: [
			`${environment.demoCredentialConfig.superAdminEmail}`,
			`${environment.demoCredentialConfig.adminEmail}`,
			`${environment.demoCredentialConfig.employeeEmail}`,
			'ruslan@example-ordinarylabs.com',
			'alish@example-ordinarylabs.com',
			'julia@example-ordinarylabs.com',
			'booster@example-ordinarylabs.com',
			'yoster@example-ordinarylabs.com'
		],
		manager: [`${environment.demoCredentialConfig.superAdminEmail}`, 'ruslan@example-ordinarylabs.com']
	},
	{
		name: 'Contractors',
		defaultMembers: [
			`${environment.demoCredentialConfig.adminEmail}`,
			'ckhandla94@gmail.com',
			'hoster@example-ordinarylabs.com',
			'aster@example-ordinarylabs.com'
		],
		manager: [`${environment.demoCredentialConfig.adminEmail}`, 'ruslan@example-ordinarylabs.com']
	},
	{
		name: 'Designers',
		defaultMembers: [
			`${environment.demoCredentialConfig.employeeEmail}`,
			'julia@example-ordinarylabs.com',
			'roster@example-ordinarylabs.com',
			'dister@example-ordinarylabs.com',
			'postern@example-ordinarylabs.com'
		],
		manager: ['julia@example-ordinarylabs.com', 'alish@example-ordinarylabs.com', `${environment.demoCredentialConfig.employeeEmail}`]
	},
	{
		name: 'QA',
		defaultMembers: [
			`${environment.demoCredentialConfig.superAdminEmail}`,
			`${environment.demoCredentialConfig.employeeEmail}`,
			'julia@example-ordinarylabs.com',
			'kyoster@example-ordinarylabs.com',
			'taster@example-ordinarylabs.com',
			'mustero@smooper.xyz'
		],
		manager: ['julia@example-ordinarylabs.com']
	},
	{
		name: 'Developers',
		defaultMembers: [
			`${environment.demoCredentialConfig.adminEmail}`,
			`${environment.demoCredentialConfig.employeeEmail}`,
			'ruslan@example-ordinarylabs.com',
			'alish@example-ordinarylabs.com',
			'booster@example-ordinarylabs.com',
			'yoster@example-ordinarylabs.com',
			'ckhandla94@gmail.com',
			'rahulrathore576@gmail.com'
		],
		manager: [`${environment.demoCredentialConfig.adminEmail}`, 'ruslan@example-ordinarylabs.com', 'alish@example-ordinarylabs.com']
	},
	{
		name: 'Marketing',
		defaultMembers: [
			`${environment.demoCredentialConfig.employeeEmail}`,
			'julia@example-ordinarylabs.com',
			'yostorono@example-ordinarylabs.com',
			'desterrro@hotmail.com'
		],
		manager: ['yostorono@example-ordinarylabs.com', `${environment.demoCredentialConfig.employeeEmail}`]
	},
	{
		name: 'Default Team',
		defaultMembers: [
			`${environment.demoCredentialConfig.superAdminEmail}`,
			`${environment.demoCredentialConfig.employeeEmail}`,
			`${environment.demoCredentialConfig.adminEmail}`,
			'ruslan@example-ordinarylabs.com',
			'alish@example-ordinarylabs.com',
			'julia@example-ordinarylabs.com'
		],
		manager: [
			`${environment.demoCredentialConfig.superAdminEmail}`,
			`${environment.demoCredentialConfig.adminEmail}`,
			`${environment.demoCredentialConfig.employeeEmail}`
		]
	},
	{
		name: 'Backend Team',
		defaultMembers: [
			`${environment.demoCredentialConfig.adminEmail}`,
			'ruslan@example-ordinarylabs.com',
			'alish@example-ordinarylabs.com',
			'ckhandla94@gmail.com',
			'rahulrathore576@gmail.com',
			'booster@example-ordinarylabs.com',
			'hoster@example-ordinarylabs.com'
		],
		manager: ['ruslan@example-ordinarylabs.com', `${environment.demoCredentialConfig.adminEmail}`]
	},
	{
		name: 'Frontend Team',
		defaultMembers: [
			`${environment.demoCredentialConfig.employeeEmail}`,
			'alish@example-ordinarylabs.com',
			'julia@example-ordinarylabs.com',
			'yoster@example-ordinarylabs.com',
			'roster@example-ordinarylabs.com',
			'dister@example-ordinarylabs.com'
		],
		manager: ['alish@example-ordinarylabs.com', `${environment.demoCredentialConfig.employeeEmail}`]
	},
	{
		name: 'Mobile Team',
		defaultMembers: [
			`${environment.demoCredentialConfig.employeeEmail}`,
			'ruslan@example-ordinarylabs.com',
			'booster@example-ordinarylabs.com',
			'ckhandla94@gmail.com',
			'yoster@example-ordinarylabs.com',
			'postern@example-ordinarylabs.com'
		],
		manager: ['ruslan@example-ordinarylabs.com', `${environment.demoCredentialConfig.employeeEmail}`]
	},
	{
		name: 'DevOps Team',
		defaultMembers: [
			`${environment.demoCredentialConfig.superAdminEmail}`,
			`${environment.demoCredentialConfig.adminEmail}`,
			'ruslan@example-ordinarylabs.com',
			'ckhandla94@gmail.com',
			'hoster@example-ordinarylabs.com'
		],
		manager: [`${environment.demoCredentialConfig.superAdminEmail}`, 'ruslan@example-ordinarylabs.com']
	}
];
