import { ComponentLayoutStyleEnum, LanguagesEnum } from '@dinary/contracts';
import { environment } from '@dinary/config';

export const DEFAULT_EMPLOYEES: any = [
	{
		email: `${environment.demoCredentialConfig.employeeEmail}`,
		password: `${environment.demoCredentialConfig.employeePassword}`,
		firstName: 'Default',
		lastName: 'Employee',
		imageUrl: 'assets/images/avatars/avatar-default.svg',
		startedWorkOn: '2018-03-20',
		employeeLevel: 'A',
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	}
];

export const DEFAULT_DINARY_EMPLOYEES: any = [
	{
		email: 'ruslan@example-ordinarylabs.com',
		password: '12345678',
		firstName: 'Ruslan',
		lastName: 'K.',
		imageUrl: 'assets/images/avatars/ruslan.jpg',
		employeeLevel: 'A',
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'alish@example-ordinarylabs.com',
		password: '12345678',
		firstName: 'Alish',
		lastName: 'M.',
		imageUrl: 'assets/images/avatars/alish.jpg',
		startedWorkOn: '2018-03-20',
		endWork: null,
		employeeLevel: 'D',
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'booster@example-ordinarylabs.com',
		password: '12345678',
		firstName: 'Booster',
		lastName: 'P.',
		imageUrl: 'assets/images/avatars/avatar-default.svg',
		startedWorkOn: '2018-03-19',
		endWork: null,
		employeeLevel: 'C',
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'yoster@example-ordinarylabs.com',
		password: '12345678',
		firstName: 'Yoster',
		lastName: 'F.',
		imageUrl: 'assets/images/avatars/avatar-default.svg',
		startedWorkOn: '2018-05-25',
		endWork: null,
		employeeLevel: 'C',
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'hoster@example-ordinarylabs.com',
		password: '12345678',
		firstName: 'Hoster',
		lastName: 'H.',
		imageUrl: 'assets/images/avatars/avatar-default.svg',
		startedWorkOn: '2019-06-17',
		endWork: null,
		employeeLevel: 'B',
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'aster@example-ordinarylabs.com',
		password: '12345678',
		firstName: 'Aster',
		lastName: 'A.',
		imageUrl: 'assets/images/avatars/avatar-default.svg',
		startedWorkOn: '2019-08-01',
		endWork: null,
		employeeLevel: 'B',
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'roster@example-ordinarylabs.com',
		password: '12345678',
		firstName: 'Roster',
		lastName: 'R.',
		imageUrl: 'assets/images/avatars/avatar-default.svg',
		startedWorkOn: '2019-11-27',
		endWork: null,
		employeeLevel: null,
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'dister@example-ordinarylabs.com',
		password: '12345678',
		firstName: 'Dister',
		lastName: 'D.',
		imageUrl: 'assets/images/avatars/avatar-default.svg',
		startedWorkOn: '2019-11-26',
		endWork: null,
		employeeLevel: null,
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'postern@example-ordinarylabs.com',
		password: '12345678',
		firstName: 'Postern',
		lastName: 'P.',
		imageUrl: 'assets/images/avatars/avatar-default.svg',
		startedWorkOn: '2020-03-16',
		endWork: null,
		employeeLevel: 'A',
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'kyoster@example-ordinarylabs.com',
		password: '12345678',
		firstName: 'Kyoster',
		lastName: 'K.',
		imageUrl: 'assets/images/avatars/avatar-default.svg',
		startedWorkOn: '2020-02-05',
		endWork: null,
		employeeLevel: 'A',
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'taster@example-ordinarylabs.com',
		password: '12345678',
		firstName: 'Taster',
		lastName: 'T.',
		imageUrl: 'assets/images/avatars/avatar-default.svg',
		startedWorkOn: '2020-03-02',
		endWork: null,
		employeeLevel: 'A',
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'mustero@smooper.xyz',
		password: '12345678',
		firstName: 'Mustero',
		lastName: 'M.',
		imageUrl: 'assets/images/avatars/avatar-default.svg',
		startedWorkOn: '2019-11-27',
		endWork: null,
		employeeLevel: null,
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'desterrro@hotmail.com',
		password: '12345678',
		firstName: 'Desterrro',
		lastName: 'D.',
		imageUrl: 'assets/images/avatars/avatar-default.svg',
		startedWorkOn: '2020-03-07',
		endWork: null,
		employeeLevel: null,
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'ckhandla94@gmail.com',
		password: '12345678',
		firstName: 'Chetan',
		lastName: 'K.',
		imageUrl: 'assets/images/avatars/chetan.png',
		startedWorkOn: '2020-03-07',
		endWork: null,
		employeeLevel: null,
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'rahulrathore576@gmail.com',
		password: '12345678',
		firstName: 'Rahul',
		lastName: 'R.',
		imageUrl: 'assets/images/avatars/rahul.png',
		startedWorkOn: '2020-09-10',
		endWork: null,
		employeeLevel: null,
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'julia@example-ordinarylabs.com',
		password: '12345678',
		firstName: 'Julia',
		lastName: 'K.',
		imageUrl: 'assets/images/avatars/julia.png',
		startedWorkOn: '2018-08-01',
		endWork: null,
		employeeLevel: 'C',
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'yostorono@example-ordinarylabs.com',
		password: '12345678',
		firstName: 'Yostorono',
		lastName: 'Y.',
		imageUrl: 'assets/images/avatars/avatar-default.svg',
		startedWorkOn: '2018-08-01',
		endWork: null,
		employeeLevel: 'C',
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	}
];
