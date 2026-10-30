import { InvoiceStats, PaymentStats, UserStats } from '@dinary/contracts';

/**
 * Interface representing global stats.
 */
export interface GlobalStats {
	tenants: number;
	employees: number;
	tasks: number;
	teams: number;
	users: UserStats;
	invoices: InvoiceStats;
	payments: PaymentStats;
	organizations: number;
	hours: number;
}
