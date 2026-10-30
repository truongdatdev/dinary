import { environment } from '@dinary/config';

export const DEFAULT_ORGANIZATION_TEAMS = [
	{
		name: 'Employees',
		defaultMembers: [
			`${environment.demoCredentialConfig.superAdminEmail}`,
			`${environment.demoCredentialConfig.adminEmail}`,
			`${environment.demoCredentialConfig.employeeEmail}`,
			'ruslan@example-dinary.app',
			'alish@example-dinary.app',
			'julia@example-dinary.app',
			'booster@example-dinary.app',
			'yoster@example-dinary.app'
		],
		manager: [`${environment.demoCredentialConfig.superAdminEmail}`, 'ruslan@example-dinary.app']
	},
	{
		name: 'Contractors',
		defaultMembers: [
			`${environment.demoCredentialConfig.adminEmail}`,
			'ckhandla94@gmail.com',
			'hoster@example-dinary.app',
			'aster@example-dinary.app'
		],
		manager: [`${environment.demoCredentialConfig.adminEmail}`, 'ruslan@example-dinary.app']
	},
	{
		name: 'Designers',
		defaultMembers: [
			`${environment.demoCredentialConfig.employeeEmail}`,
			'julia@example-dinary.app',
			'roster@example-dinary.app',
			'dister@example-dinary.app',
			'postern@example-dinary.app'
		],
		manager: ['julia@example-dinary.app', 'alish@example-dinary.app', `${environment.demoCredentialConfig.employeeEmail}`]
	},
	{
		name: 'QA',
		defaultMembers: [
			`${environment.demoCredentialConfig.superAdminEmail}`,
			`${environment.demoCredentialConfig.employeeEmail}`,
			'julia@example-dinary.app',
			'kyoster@example-dinary.app',
			'taster@example-dinary.app',
			'mustero@smooper.xyz'
		],
		manager: ['julia@example-dinary.app']
	},
	{
		name: 'Developers',
		defaultMembers: [
			`${environment.demoCredentialConfig.adminEmail}`,
			`${environment.demoCredentialConfig.employeeEmail}`,
			'ruslan@example-dinary.app',
			'alish@example-dinary.app',
			'booster@example-dinary.app',
			'yoster@example-dinary.app',
			'ckhandla94@gmail.com',
			'rahulrathore576@gmail.com'
		],
		manager: [`${environment.demoCredentialConfig.adminEmail}`, 'ruslan@example-dinary.app', 'alish@example-dinary.app']
	},
	{
		name: 'Marketing',
		defaultMembers: [
			`${environment.demoCredentialConfig.employeeEmail}`,
			'julia@example-dinary.app',
			'yostorono@example-dinary.app',
			'desterrro@hotmail.com'
		],
		manager: ['yostorono@example-dinary.app', `${environment.demoCredentialConfig.employeeEmail}`]
	},
	{
		name: 'Default Team',
		defaultMembers: [
			`${environment.demoCredentialConfig.superAdminEmail}`,
			`${environment.demoCredentialConfig.employeeEmail}`,
			`${environment.demoCredentialConfig.adminEmail}`,
			'ruslan@example-dinary.app',
			'alish@example-dinary.app',
			'julia@example-dinary.app'
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
			'ruslan@example-dinary.app',
			'alish@example-dinary.app',
			'ckhandla94@gmail.com',
			'rahulrathore576@gmail.com',
			'booster@example-dinary.app',
			'hoster@example-dinary.app'
		],
		manager: ['ruslan@example-dinary.app', `${environment.demoCredentialConfig.adminEmail}`]
	},
	{
		name: 'Frontend Team',
		defaultMembers: [
			`${environment.demoCredentialConfig.employeeEmail}`,
			'alish@example-dinary.app',
			'julia@example-dinary.app',
			'yoster@example-dinary.app',
			'roster@example-dinary.app',
			'dister@example-dinary.app'
		],
		manager: ['alish@example-dinary.app', `${environment.demoCredentialConfig.employeeEmail}`]
	},
	{
		name: 'Mobile Team',
		defaultMembers: [
			`${environment.demoCredentialConfig.employeeEmail}`,
			'ruslan@example-dinary.app',
			'booster@example-dinary.app',
			'ckhandla94@gmail.com',
			'yoster@example-dinary.app',
			'postern@example-dinary.app'
		],
		manager: ['ruslan@example-dinary.app', `${environment.demoCredentialConfig.employeeEmail}`]
	},
	{
		name: 'DevOps Team',
		defaultMembers: [
			`${environment.demoCredentialConfig.superAdminEmail}`,
			`${environment.demoCredentialConfig.adminEmail}`,
			'ruslan@example-dinary.app',
			'ckhandla94@gmail.com',
			'hoster@example-dinary.app'
		],
		manager: [`${environment.demoCredentialConfig.superAdminEmail}`, 'ruslan@example-dinary.app']
	}
];
