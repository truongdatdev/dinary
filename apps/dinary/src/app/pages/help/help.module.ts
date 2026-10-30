import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { TranslatePipe } from '@ngx-translate/core';
import { SharedModule } from '@dinary/ui-core/shared';
import { HelpComponent } from './help.component';
import { HelpRoutingModule } from './help-routing.module';

@NgModule({
	imports: [
		CommonModule,
		NbButtonModule,
		NbCardModule,
		NbIconModule,
		NbInputModule,
		TranslatePipe,
		HelpRoutingModule,
		SharedModule
	],
	declarations: [HelpComponent]
})
export class HelpModule {}
