import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbIconModule } from '@nebular/theme';
import { TranslatePipe } from '@ngx-translate/core';
import { DinaryButtonActionComponent } from './dinary-button-action.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
	imports: [CommonModule, NbButtonModule, NbIconModule, TranslatePipe, ComponentsModule],
	declarations: [DinaryButtonActionComponent],
	exports: [DinaryButtonActionComponent]
})
export class DinaryButtonActionModule {}
