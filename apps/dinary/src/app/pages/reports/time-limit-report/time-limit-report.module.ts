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
import { TimeLimitReportRoutingModule } from './time-limit-report-routing.module';
import { TimeLimitReportComponent } from './time-limit-report/time-limit-report.component';

@NgModule({
	declarations: [TimeLimitReportComponent],
	imports: [
		TimeLimitReportRoutingModule,
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
export class TimeLimitReportModule {}
