const baseConfig = require('../../../eslint.config.js');

/**
 * Every request of the Dinary Cloud connection goes through the Dinary Cloud SDK's client (its
 * generated operation table, one base URL, no redirect): no other HTTP client, no analytics plugin,
 * and nothing of the anonymous statistics module (which is independent of it).
 */
module.exports = [
	...baseConfig,
	{
		files: ['**/*.ts'],
		rules: {
			'no-restricted-imports': [
				'error',
				{
					paths: [
						{
							name: '@dinary/plugin-jitsu-analytics',
							message: 'The Dinary Cloud connection never uses analytics plugins.'
						},
						{
							name: '@dinary/plugin-posthog',
							message: 'The Dinary Cloud connection never uses analytics plugins.'
						},
						{
							name: '@dinary/plugin-ever-stats',
							message: 'The Dinary Cloud connection is independent of the anonymous statistics.'
						},
						{ name: '@nestjs/axios', message: 'Dinary Cloud is called through the SDK client only.' },
						{ name: 'axios', message: 'Dinary Cloud is called through the SDK client only.' },
						{ name: 'undici', message: 'Dinary Cloud is called through the SDK client only.' }
					]
				}
			]
		}
	}
];
