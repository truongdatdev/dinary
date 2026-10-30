import { NgModule } from '@angular/core';
import { NbIconModule, NbSpinnerModule, NbCardModule, NbSelectModule } from '@nebular/theme';
import { TranslatePipe } from '@ngx-translate/core';
import {
	DinaryFiltersModule,
	LineChartModule,
	NoDataMessageModule,
	ProgressStatusModule,
	SharedModule,
	TableComponentsModule
} from '@dinary/ui-core/shared';
import { ClientBudgetsReportRoutingModule } from './client-budgets-report-routing.module';
import { ClientBudgetsReportComponent } from './client-budgets-report/client-budgets-report.component';

@NgModule({
	declarations: [ClientBudgetsReportComponent],
	imports: [
		ClientBudgetsReportRoutingModule,
		SharedModule,
		TranslatePipe,
		NbIconModule,
		NbSpinnerModule,
		NbCardModule,
		NbSelectModule,
		LineChartModule,
		ProgressStatusModule,
		DinaryFiltersModule,
		TableComponentsModule,
		NoDataMessageModule
	]
})
export class ClientBudgetsReportModule {}
