import { IAppIntegrationConfig } from '@dinary/common';
import { ITermsAcceptanceClaim, IUserSigninWorkspaceResponse, LanguagesEnum } from '@dinary/contracts';

/** The registration input this plugin passes to Dinary's own register path. */
export interface ZitadelRegistrationInput {
	user: { email: string; firstName?: string; lastName?: string };
	terms?: ITermsAcceptanceClaim[];
}

/**
 * The parts of Dinary's authentication service the plugin uses. Provided by the core authentication
 * service itself, so the e-mail code, its rate limits and the register path are Dinary's own.
 */
export interface DinaryAuthPort {
	/** Sends Dinary's one-time e-mail code to every active user with this e-mail. */
	sendWorkspaceSigninCode(input: { email: string } & Partial<IAppIntegrationConfig>, locale: LanguagesEnum): Promise<void>;

	/** Checks Dinary's one-time e-mail code (and consumes it) and returns the workspaces it proved. */
	signinWorkspacesByMagicCode(
		payload: { email: string; code: string },
		includeTeams: boolean
	): Promise<IUserSigninWorkspaceResponse>;

	/** Dinary's register path (the one `POST /api/auth/register` runs). */
	register(input: ZitadelRegistrationInput, languageCode: LanguagesEnum): Promise<{ id: string; tenantId?: string | null }>;
}

/** Injection token of {@link DinaryAuthPort}. */
export const DINARY_AUTH = 'AUTH_ZITADEL_DINARY_AUTH';
