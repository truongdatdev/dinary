/**
 * Theme-adaptive design tokens for React surfaces rendered INSIDE the Dinary Angular shell.
 *
 * Every value is a CSS custom-property reference that the active Nebular/Dinary theme defines
 * (`packages/ui-core/static/styles/themes.scss` + Nebular's `_mapping.scss`), so a React
 * component that paints with these strings follows the light / dark / corporate / material
 * theme the user picked — exactly like the Angular SCSS that uses `var(--dinary-card-2)` or
 * `nb-theme(text-primary-color)`.
 *
 * Contrast this with `theme.ts` (hardcoded light hexes): keep that for standalone previews,
 * use these tokens for anything mounted through `@dinary/ui-react`.
 */
export const themeTokens = {
	// ── Dinary surfaces ────────────────────────────────────────────
	/** Card background 1 (`card-background-color`). */
	card1: 'var(--dinary-card-1)',
	/** Tinted card background 2 (page cards, list bodies). */
	card2: 'var(--dinary-card-2)',
	/** Basic app background 1. */
	background1: 'var(--background-basic-color-1)',
	/** Basic app background 2. */
	background2: 'var(--background-basic-color-2)',
	/** Sidebar-ish translucent surface 3 (drag placeholders). */
	surface3: 'var(--dinary-sidebar-background-3)',
	/** Sidebar-ish translucent surface 4 (screenshot cards, empty states). */
	surface4: 'var(--dinary-sidebar-background-4)',
	/** Primary-tinted transparent background (outline button borders). */
	backgroundTransparent: 'var(--dinary-background-transparent)',
	/** Primary transparent 100 (drag previews, avatar chips). */
	primaryTransparent100: 'var(--color-primary-transparent-100)',
	/** Default divider colour. */
	border: 'var(--dinary-border-default-color)',

	// ── Text ──────────────────────────────────────────────────────
	/** Strong text (`dinary-text-color-1`). */
	text1: 'var(--dinary-text-color-1)',
	/** Muted text (`dinary-text-color-2`). */
	text2: 'var(--dinary-text-color-2)',
	/** Nebular basic text. */
	textBasic: 'var(--text-basic-color)',
	/** Nebular primary text. */
	textPrimary: 'var(--text-primary-color)',
	/** Nebular hint text. */
	textHint: 'var(--text-hint-color)',
	/** Contact/link name colour used by `ngx-avatar`. */
	textContact: 'var(--dinary-text-contact)',

	// ── Shape / elevation ─────────────────────────────────────────
	radius: 'var(--border-radius)',
	shadow: 'var(--dinary-shadow)',
	cardShadow: '0px 6px 20px 0px rgb(0 0 0 / 5%)',

	// ── Status colours ────────────────────────────────────────────
	primary: 'var(--color-primary-default)',
	success: 'var(--color-success-default)',
	info: 'var(--color-info-default)',
	warning: 'var(--color-warning-default)',
	danger: 'var(--color-danger-default)',
	basic: 'var(--color-basic-default)',

	// ── Typography ────────────────────────────────────────────────
	fontFamily: 'var(--font-family-primary)',
	fontSizeSmall: '12px',
	fontSizeBase: '14px'
} as const;

/** Nebular status names understood by the primitives below. */
export type NbStatus = 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'control';

/**
 * Builds a `var(--color-<status>-default)` reference for a Nebular status name.
 *
 * @param status Nebular status (`'success'`, `'danger'`, …).
 */
export function statusColor(status: NbStatus): string {
	return `var(--color-${status}-default)`;
}
