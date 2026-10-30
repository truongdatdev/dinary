import { NgModule } from '@angular/core';
import { NbIconModule, NbSpinnerModule, NbCardModule, NbSelectModule } from '@nebular/theme';
import { TranslatePipe } from '@ngx-translate/core';
import {
	DinaryFiltersModule,
	LineChartModule,
	NoDataMessageModule,
	ProgressStatusModule,
	ProjectColumnViewModule,
	SharedModule
} from '@dinary/ui-core/shared';
import { ProjectBudgetsReportRoutingModule } from './project-budgets-report-routing.module';
import { ProjectBudgetsReportComponent } from './project-budgets-report/project-budgets-report.component';

@NgModule({
	declarations: [ProjectBudgetsReportComponent],
	imports: [
		ProjectBudgetsReportRoutingModule,
		SharedModule,
		TranslatePipe,
		NbIconModule,
		NbSpinnerModule,
		NbCardModule,
		NbSelectModule,
		LineChartModule,
		ProgressStatusModule,
		DinaryFiltersModule,
		ProjectColumnViewModule,
		NoDataMessageModule
	]
})
export class ProjectBudgetsReportModule {}
