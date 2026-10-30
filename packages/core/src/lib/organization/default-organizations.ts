import { CurrenciesEnum, DefaultValueDateTypeEnum } from '@dinary/contracts';

export const DEFAULT_DINARY_ORGANIZATIONS = [
	{
		name: 'Dinary Technologies LTD',
		currency: CurrenciesEnum.BGN,
		defaultValueDateType: DefaultValueDateTypeEnum.TODAY,
		imageUrl: 'assets/images/logos/dinary-large.jpg',
		isDefault: true,
		totalEmployees: 17
	},
	{
		name: 'Ordinary Labs Ltd',
		currency: CurrenciesEnum.ILS,
		defaultValueDateType: DefaultValueDateTypeEnum.TODAY,
		imageUrl: 'assets/images/logos/dinary-large.jpg',
		isDefault: false,
		totalEmployees: 0
	}
];

export const DEFAULT_ORGANIZATIONS = [
	{
		name: 'Default Company',
		currency: CurrenciesEnum.USD,
		defaultValueDateType: DefaultValueDateTypeEnum.TODAY,
		imageUrl: 'assets/images/logos/logo_Dinary.svg',
		isDefault: true,
		totalEmployees: 1
	}
];
