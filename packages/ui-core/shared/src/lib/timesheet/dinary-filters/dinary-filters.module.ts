import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbIconModule, NbPopoverModule, NbSelectModule } from '@nebular/theme';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { TranslatePipe } from '@ngx-translate/core';
import { PipesModule } from '../../pipes/pipes.module';
import { DinaryFiltersComponent } from './dinary-filters.component';
import { TimezoneFilterModule } from './timezone-filter/timezone-filter.module';

@NgModule({
	declarations: [DinaryFiltersComponent],
	exports: [DinaryFiltersComponent],
	imports: [
		CommonModule,
		FormsModule,
		NbButtonModule,
		NbIconModule,
		NbPopoverModule,
		NbSelectModule,
		NgxSliderModule,
		TranslatePipe,
		PipesModule,
		TimezoneFilterModule
	]
})
export class DinaryFiltersModule {}
