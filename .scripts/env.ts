// NOTE: do NOT ever put here any secure settings! (e.g. Secret Keys)
// We are using dotenv (.env) for consistency with other Platform projects
// This is Angular app and all settings will be loaded into the client browser!

import * as dotenv from 'dotenv';
import { cleanEnv, EnvError, makeValidator, str } from 'envalid';

// envalid 7+ no longer reads `.env` itself (its `dotEnvPath` option is gone) and is always strict: `.env` is loaded
// here, as envalid 6 did, without overriding a variable the environment already sets.
dotenv.config({ path: __dirname + '/../.env', quiet: true });

// The .env files write an unset value as `KEY=`. envalid 6, which these specs were written for, read an empty number as
// 0 and an empty boolean as null; envalid 7+ rejects both. These keep envalid 6's parsing, so the generated
// environment does not change.
const num = makeValidator<number>((input) => {
	const coerced = +input;
	if (Number.isNaN(coerced)) {
		throw new EnvError(`Invalid number input: "${input}"`);
	}
	return coerced;
});
const bool = makeValidator<boolean>((input) => {
	switch (input) {
		case 'true':
		case 't':
		case '1':
			return true;
		case 'false':
		case 'f':
		case '0':
			return false;
		default:
			return null;
	}
});

export type Env = Readonly<{
	production: boolean;

	// Set to true if build / runs in Docker
	IS_DOCKER: boolean;

	COOKIE_DOMAIN: string;

	// Base URL of Dinary UI website
	CLIENT_BASE_URL: string;

	// Base API URL
	API_BASE_URL: string;

	// Platform website
	PLATFORM_WEBSITE_URL: string;

	// Platform website Download URLS
	PLATFORM_WEBSITE_DOWNLOAD_URL: string;
	DESKTOP_APP_DOWNLOAD_LINK_APPLE: string;
	DESKTOP_APP_DOWNLOAD_LINK_WINDOWS: string;
	DESKTOP_APP_DOWNLOAD_LINK_LINUX: string;
	MOBILE_APP_DOWNLOAD_LINK: string;
	EXTENSION_DOWNLOAD_LINK: string;

	// Platform logo url
	PLATFORM_LOGO: string;

	SENTRY_DSN: string;
	SENTRY_TRACES_SAMPLE_RATE: string;

	POSTHOG_KEY: string;
	POSTHOG_HOST: string;
	POSTHOG_ENABLED: boolean;
	POSTHOG_FLUSH_INTERVAL: number;

	GOOGLE_MAPS_API_KEY: string;
	GOOGLE_PLACE_AUTOCOMPLETE: boolean;

	HUBSTAFF_REDIRECT_URL: string;

	// Sign-in start URLs of the optional Ever ID and Keycloak sign-in plugins. Empty shows no button.
	ZITADEL_AUTH_LINK: string;
	KEYCLOAK_AUTH_LINK: string;

	DEFAULT_LATITUDE: number;
	DEFAULT_LONGITUDE: number;
	DEFAULT_CURRENCY: string;
	DEFAULT_COUNTRY?: string;

	DEMO: boolean;

	// Default Super Admin Credentials
	DEMO_SUPER_ADMIN_EMAIL?: string;
	DEMO_SUPER_ADMIN_PASSWORD?: string;

	// Default Admin Credentials
	DEMO_ADMIN_EMAIL?: string;
	DEMO_ADMIN_PASSWORD?: string;

	// Default Employee Credentials
	DEMO_EMPLOYEE_EMAIL?: string;
	DEMO_EMPLOYEE_PASSWORD?: string;

	CHATWOOT_SDK_TOKEN: string;

	//nebular chat map API key
	CHAT_MESSAGE_GOOGLE_MAP: string;

	DINARY_CLOUD_APP: string;

	FILE_PROVIDER: string;

	// Jitsu Browser Configurations
	JITSU_BROWSER_URL: string;
	JITSU_BROWSER_WRITE_KEY: string;

	DINARY_GITHUB_APP_NAME: string;
	DINARY_GITHUB_CLIENT_ID: string;
	DINARY_GITHUB_REDIRECT_URL: string;
	DINARY_GITHUB_POST_INSTALL_URL: string;

	DINARY_DESKTOP_LOGO_512X512: string;
	PLATFORM_PRIVACY_URL: string;
	PLATFORM_TOS_URL: string;
	NO_INTERNET_LOGO: string;

	COMPANY_NAME: string;
	COMPANY_LINK: string;
	COMPANY_SITE_NAME: string;
	COMPANY_SITE_LINK: string;
	COMPANY_GITHUB_LINK: string;
	COMPANY_GITLAB_LINK: string;
	COMPANY_FACEBOOK_LINK: string;
	COMPANY_TWITTER_LINK: string;
	COMPANY_IN_LINK: string;
	PROJECT_REPO: string;

	DESKTOP_TIMER_APP_NAME: string;
	DESKTOP_TIMER_APP_DESCRIPTION: string;
	DESKTOP_TIMER_APP_ID: string;
	DESKTOP_TIMER_APP_REPO_NAME: string;
	DESKTOP_TIMER_APP_REPO_OWNER: string;
	DESKTOP_TIMER_APP_WELCOME_TITLE: string;
	DESKTOP_TIMER_APP_WELCOME_CONTENT: string;
	DESKTOP_TIMER_APP_PROTOCOL: string;

	DESKTOP_APP_NAME: string;
	DESKTOP_APP_DESCRIPTION: string;
	DESKTOP_APP_ID: string;
	DESKTOP_APP_REPO_NAME: string;
	DESKTOP_APP_REPO_OWNER: string;
	DESKTOP_APP_WELCOME_TITLE: string;
	DESKTOP_APP_WELCOME_CONTENT: string;
	DESKTOP_APP_PROTOCOL: string;

	DESKTOP_SERVER_APP_NAME: string;
	DESKTOP_SERVER_APP_DESCRIPTION: string;
	DESKTOP_SERVER_APP_ID: string;
	DESKTOP_SERVER_APP_REPO_NAME: string;
	DESKTOP_SERVER_APP_REPO_OWNER: string;
	DESKTOP_SERVER_APP_WELCOME_TITLE: string;
	DESKTOP_SERVER_APP_WELCOME_CONTENT: string;
	DESKTOP_SERVER_APP_PROTOCOL: string;

	DESKTOP_API_SERVER_APP_NAME: string;
	DESKTOP_API_SERVER_APP_DESCRIPTION: string;
	DESKTOP_API_SERVER_APP_ID: string;
	DESKTOP_API_SERVER_APP_REPO_NAME: string;
	DESKTOP_API_SERVER_APP_REPO_OWNER: string;
	DESKTOP_API_SERVER_APP_WELCOME_TITLE: string;
	DESKTOP_API_SERVER_APP_WELCOME_CONTENT: string;
	DESKTOP_API_SERVER_APP_PROTOCOL: string;
	DESKTOP_MCP_SERVER_APP_NAME: string;
	DESKTOP_MCP_SERVER_APP_DESCRIPTION: string;
	DESKTOP_MCP_SERVER_APP_ID: string;
	DESKTOP_MCP_SERVER_APP_REPO_NAME: string;
	DESKTOP_MCP_SERVER_APP_REPO_OWNER: string;
	DESKTOP_MCP_SERVER_APP_WELCOME_TITLE: string;
	DESKTOP_MCP_SERVER_APP_WELCOME_CONTENT: string;

	AWHost: string;
	API_DEFAULT_PORT: number;
	DINARY_UI_DEFAULT_PORT: number;
	SCREENSHOTS_ENGINE_METHOD: string;
	I18N_FILES_URL: string;

	REGISTER_URL: string;
	FORGOT_PASSWORD_URL: string;

	AGENT_APP_NAME: string;
	AGENT_APP_DESCRIPTION: string;
	AGENT_APP_REPO_OWNER: string;
	AGENT_APP_REPO_NAME: string;
	AGENT_APP_ID: string;
	AGENT_APP_WELCOME_TITLE: string;
	AGENT_APP_WELCOME_CONTENT: string;
	AGENT_APP_PROTOCOL: string;
	AGENT_POOL_ACTIVITY_INTERVAL: number;
	DINARY_DESKTOP_TRAY_ICON: string;
	DESKTOP_JWT_SECRET: string;
	DESKTOP_JWT_REFRESH_TOKEN_SECRET: string;

	// Deployed release version (git tag, e.g. 'v111.2.10') and commit SHA,
	// embedded at Docker build time. Shown in the web UI footer.
	DINARY_APP_VERSION: string;
	DINARY_APP_COMMIT: string;
}>;

export const env: Env = cleanEnv(
	process.env,
	{
		production: bool({ default: false }),

		IS_DOCKER: bool({ default: false }),

		COOKIE_DOMAIN: str({ default: '.dinary.app' }),

		CLIENT_BASE_URL: str({ default: 'http://localhost:4200' }),

		API_BASE_URL: str({ default: 'http://localhost:3000' }),

		PLATFORM_WEBSITE_URL: str({ default: 'https://dinary.app' }),
		PLATFORM_WEBSITE_DOWNLOAD_URL: str({
			default: 'https://dinary.app/downloads'
		}),
		DESKTOP_APP_DOWNLOAD_LINK_APPLE: str({
			default: 'https://dinary.app/downloads#desktop/apple'
		}),
		DESKTOP_APP_DOWNLOAD_LINK_WINDOWS: str({
			default: 'https://dinary.app/downloads#desktop/windows'
		}),
		DESKTOP_APP_DOWNLOAD_LINK_LINUX: str({
			default: 'https://dinary.app/downloads#desktop/linux'
		}),
		MOBILE_APP_DOWNLOAD_LINK: str({
			default: 'https://dinary.app/downloads#mobile'
		}),
		EXTENSION_DOWNLOAD_LINK: str({
			default: 'https://dinary.app/downloads#extensions'
		}),

		SENTRY_DSN: str({ default: '' }),
		SENTRY_TRACES_SAMPLE_RATE: str({ default: '' }),

		POSTHOG_KEY: str({ default: '' }),
		POSTHOG_HOST: str({ default: '' }),
		POSTHOG_ENABLED: bool({ default: false }),
		POSTHOG_FLUSH_INTERVAL: num({ default: 10000 }),

		GOOGLE_MAPS_API_KEY: str({ default: '' }),
		GOOGLE_PLACE_AUTOCOMPLETE: bool({ default: false }),

		HUBSTAFF_REDIRECT_URL: str({ default: '' }),

		ZITADEL_AUTH_LINK: str({ default: '' }),
		KEYCLOAK_AUTH_LINK: str({ default: '' }),

		DEFAULT_LATITUDE: num({ default: 42.6459136 }),
		DEFAULT_LONGITUDE: num({ default: 23.3332736 }),
		DEFAULT_CURRENCY: str({ default: 'USD' }),
		DEFAULT_COUNTRY: str({ default: 'US' }),

		DEMO: bool({ default: false }),

		DEMO_SUPER_ADMIN_EMAIL: str({ default: 'admin@dinary.app' }),
		DEMO_SUPER_ADMIN_PASSWORD: str({ default: 'admin' }),

		DEMO_ADMIN_EMAIL: str({ default: 'local.admin@dinary.app' }),
		DEMO_ADMIN_PASSWORD: str({ default: 'admin' }),

		DEMO_EMPLOYEE_EMAIL: str({ default: 'employee@dinary.app' }),
		DEMO_EMPLOYEE_PASSWORD: str({ default: '12345678' }),

		CHATWOOT_SDK_TOKEN: str({ default: '' }),
		CHAT_MESSAGE_GOOGLE_MAP: str({ default: '' }),
		DINARY_CLOUD_APP: str({ default: 'https://app.dinary.app/#' }),

		FILE_PROVIDER: str({ default: 'LOCAL' }),

		JITSU_BROWSER_URL: str({ default: '' }),
		JITSU_BROWSER_WRITE_KEY: str({ default: '' }),

		DINARY_GITHUB_APP_NAME: str({ default: '' }),
		DINARY_GITHUB_CLIENT_ID: str({ default: '' }),
		DINARY_GITHUB_REDIRECT_URL: str({ default: '' }),
		DINARY_GITHUB_POST_INSTALL_URL: str({ default: '' }),

		// Set default platform logo
		PLATFORM_LOGO: str({
			default: 'assets/images/logos/logo_Dinary.svg'
		}),

		//Set default dinary desktop logo 512x512 pixels
		DINARY_DESKTOP_LOGO_512X512: str({
			default: 'assets/icons/icon_512x512.png'
		}),

		// Set default platform privacy link
		PLATFORM_PRIVACY_URL: str({
			default: 'https://dinary.app/privacy'
		}),

		// Set default platform terms of services link
		PLATFORM_TOS_URL: str({
			default: 'https://dinary.app/tos'
		}),

		COMPANY_NAME: str({
			default: 'Dinary'
		}),
		COMPANY_LINK: str({
			default: 'https://dinary.app'
		}),
		COMPANY_SITE_NAME: str({
			default: 'Dinary'
		}),
		COMPANY_SITE_LINK: str({
			default: 'https://dinary.app'
		}),
		COMPANY_GITHUB_LINK: str({
			default: 'https://github.com/truongdatdev'
		}),
		COMPANY_GITLAB_LINK: str({
			default: 'https://gitlab.com/truongdatdev'
		}),
		COMPANY_FACEBOOK_LINK: str({
			default: 'https://www.facebook.com/dinary'
		}),
		COMPANY_TWITTER_LINK: str({
			default: 'https://twitter.com/dinary'
		}),
		COMPANY_IN_LINK: str({
			default: 'https://www.linkedin.com/company/truongdatdev'
		}),
		NO_INTERNET_LOGO: str({
			default: 'assets/images/logos/logo_Dinary.svg'
		}),
		PROJECT_REPO: str({
			default: 'https://github.com/truongdatdev/dinary.git'
		}),

		DESKTOP_TIMER_APP_NAME: str({
			default: 'dinary-desktop-timer'
		}),
		DESKTOP_TIMER_APP_DESCRIPTION: str({
			default: 'Dinary Desktop Timer'
		}),
		DESKTOP_TIMER_APP_ID: str({
			default: 'com.dinary.dinarydesktoptimer'
		}),
		DESKTOP_TIMER_APP_REPO_NAME: str({
			default: 'dinary-desktop-timer'
		}),
		DESKTOP_TIMER_APP_REPO_OWNER: str({ default: 'truongdatdev' }),
		DESKTOP_TIMER_APP_WELCOME_TITLE: str({ default: '' }),
		DESKTOP_TIMER_APP_WELCOME_CONTENT: str({ default: '' }),
		DESKTOP_TIMER_APP_PROTOCOL: str({ default: 'dinary-timer' }),

		DESKTOP_APP_NAME: str({
			default: 'dinary-desktop'
		}),
		DESKTOP_APP_DESCRIPTION: str({
			default: 'Dinary Desktop'
		}),
		DESKTOP_APP_ID: str({
			default: 'com.dinary.dinarydesktop'
		}),
		DESKTOP_APP_REPO_NAME: str({
			default: 'dinary-desktop'
		}),
		DESKTOP_APP_REPO_OWNER: str({ default: 'truongdatdev' }),
		DESKTOP_APP_WELCOME_TITLE: str({ default: '' }),
		DESKTOP_APP_WELCOME_CONTENT: str({ default: '' }),
		DESKTOP_APP_PROTOCOL: str({ default: 'dinary-desktop' }),

		DESKTOP_SERVER_APP_NAME: str({
			default: 'dinary-server'
		}),
		DESKTOP_SERVER_APP_DESCRIPTION: str({
			default: 'Dinary Server'
		}),
		DESKTOP_SERVER_APP_ID: str({
			default: 'com.dinary.dinaryserver'
		}),
		DESKTOP_SERVER_APP_REPO_NAME: str({
			default: 'dinary-server'
		}),
		DESKTOP_SERVER_APP_REPO_OWNER: str({ default: 'truongdatdev' }),
		DESKTOP_SERVER_APP_WELCOME_TITLE: str({ default: '' }),
		DESKTOP_SERVER_APP_WELCOME_CONTENT: str({ default: '' }),
		DESKTOP_SERVER_APP_PROTOCOL: str({ default: 'dinary-server' }),

		I18N_FILES_URL: str({ default: '' }),
		AWHost: str({ default: 'http://localhost:5600' }),
		API_DEFAULT_PORT: num({ default: 3000 }),
		DINARY_UI_DEFAULT_PORT: num({ default: 5621 }),
		SCREENSHOTS_ENGINE_METHOD: str({ default: 'ScreenshotDesktopLib' }),

		DESKTOP_API_SERVER_APP_NAME: str({
			default: 'dinary-api-server'
		}),
		DESKTOP_API_SERVER_APP_DESCRIPTION: str({
			default: 'Dinary API Server'
		}),
		DESKTOP_API_SERVER_APP_ID: str({
			default: 'com.dinary.dinaryapiserver'
		}),
		DESKTOP_API_SERVER_APP_REPO_NAME: str({
			default: 'dinary-api-server'
		}),
		DESKTOP_API_SERVER_APP_REPO_OWNER: str({ default: 'truongdatdev' }),
		DESKTOP_API_SERVER_APP_WELCOME_TITLE: str({ default: '' }),
		DESKTOP_API_SERVER_APP_WELCOME_CONTENT: str({ default: '' }),
		DESKTOP_API_SERVER_APP_PROTOCOL: str({ default: 'dinary-api-server' }),
		DESKTOP_MCP_SERVER_APP_NAME: str({
			default: 'dinary-mcp-server'
		}),
		DESKTOP_MCP_SERVER_APP_DESCRIPTION: str({
			default: 'Dinary MCP Server'
		}),
		DESKTOP_MCP_SERVER_APP_ID: str({
			default: 'com.dinary.dinarymcpserver'
		}),
		DESKTOP_MCP_SERVER_APP_REPO_NAME: str({
			default: 'dinary-mcp-server'
		}),
		DESKTOP_MCP_SERVER_APP_REPO_OWNER: str({ default: 'truongdatdev' }),
		DESKTOP_MCP_SERVER_APP_WELCOME_TITLE: str({ default: '' }),
		DESKTOP_MCP_SERVER_APP_WELCOME_CONTENT: str({ default: '' }),

		REGISTER_URL: str({ default: 'https://app.dinary.app/#/auth/register' }),
		FORGOT_PASSWORD_URL: str({ default: 'https://app.dinary.app/#/auth/request-password' }),
		AGENT_APP_NAME: str({
			default: 'dinary-agent'
		}),
		AGENT_APP_ID: str({
			default: 'com.dinary.dinaryagent'
		}),
		AGENT_APP_DESCRIPTION: str({
			default: 'Dinary Agent'
		}),
		AGENT_APP_REPO_NAME: str({
			default: 'dinary-agent'
		}),
		AGENT_APP_REPO_OWNER: str({
			default: 'truongdatdev'
		}),
		AGENT_APP_WELCOME_TITLE: str({
			default: ''
		}),
		AGENT_APP_WELCOME_CONTENT: str({
			default: ''
		}),
		AGENT_APP_PROTOCOL: str({
			default: 'dinary-agent'
		}),
		AGENT_POOL_ACTIVITY_INTERVAL: num({
			default: 5000
		}),
		DINARY_DESKTOP_TRAY_ICON: str({
			default: 'assets/icons/default-tray-icon.png'
		}),
		// No published default (GHSA-39j7-x845-4w3c): these values were baked into every desktop build and
		// used as the local API's signing keys. Left empty, each install generates and stores its own
		// random secrets at first start (see ensureDesktopSecrets in @dinary/desktop-lib).
		DESKTOP_JWT_SECRET: str({
			default: ''
		}),
		DESKTOP_JWT_REFRESH_TOKEN_SECRET: str({
			default: ''
		}),

		// Deployed release version (git tag) + commit SHA, embedded at build time.
		DINARY_APP_VERSION: str({ default: '' }),
		DINARY_APP_COMMIT: str({ default: '' })
	}
);
