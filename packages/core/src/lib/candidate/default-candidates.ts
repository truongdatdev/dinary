import { ComponentLayoutStyleEnum, LanguagesEnum } from '@dinary/contracts';

export const DEFAULT_CANDIDATES = [
	{
		email: 'john@example-dinary.app',
		password: '12345678',
		firstName: 'John',
		lastName: 'S.',
		imageUrl: 'assets/images/avatars/alish.jpg',
		candidateLevel: 'D',
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'jaye@example-dinary.app',
		password: '12345678',
		firstName: 'Jaye',
		lastName: 'J.',
		imageUrl: 'assets/images/avatars/avatar-default.svg',
		candidateLevel: 'B',
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'kasey@example-dinary.app',
		password: '12345678',
		firstName: 'Kasey',
		lastName: 'K.',
		imageUrl: 'assets/images/avatars/avatar-default.svg',
		candidateLevel: null,
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'norris@example-dinary.app',
		password: '12345678',
		firstName: 'Norris ',
		lastName: 'N.',
		imageUrl: 'assets/images/avatars/avatar-default.svg',
		candidateLevel: 'A',
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'estella@example-dinary.app',
		password: '12345678',
		firstName: 'Estella',
		lastName: 'E.',
		imageUrl: 'assets/images/avatars/avatar-default.svg',
		candidateLevel: null,
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	},
	{
		email: 'greg@example-dinary.app',
		password: '12345678',
		firstName: 'Greg ',
		lastName: 'G.',
		imageUrl: 'assets/images/avatars/avatar-default.svg',
		candidateLevel: 'A',
		preferredLanguage: LanguagesEnum.ENGLISH,
		preferredComponentLayout: ComponentLayoutStyleEnum.TABLE
	}
];
