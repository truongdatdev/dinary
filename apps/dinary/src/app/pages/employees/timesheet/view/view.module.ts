import { NgModule } from '@angular/core';
import { ROUTES } from '@angular/router';
import { NbCardModule, NbButtonModule, NbIconModule, NbCheckboxModule } from '@nebular/theme';
import { TranslatePipe } from '@ngx-translate/core';
import { PageRouteRegistryService } from '@dinary/ui-core/core';
import { DialogsModule, EditTimeLogModalModule, DinaryButtonActionModule, SharedModule } from '@dinary/ui-core/shared';
import { createTimesheetDetailsRoutes } from './view.routes';
import { TimesheetViewComponent } from './view/view.component';

// Nebular Modules
const NB_MODULES = [NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule];

@NgModule({
	declarations: [TimesheetViewComponent],
	imports: [
		...NB_MODULES,
		TranslatePipe,
		SharedModule,
		DialogsModule,
		EditTimeLogModalModule,
		DinaryButtonActionModule
	],
	providers: [
		{
			provide: ROUTES,
			useFactory: (service: PageRouteRegistryService) => createTimesheetDetailsRoutes(service),
			deps: [PageRouteRegistryService],
			multi: true
		}
	]
})
export class ViewModule {}
