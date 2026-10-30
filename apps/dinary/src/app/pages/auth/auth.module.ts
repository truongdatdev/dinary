import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleService } from '@dinary/ui-core/core';
import { TranslatePipe } from '@ngx-translate/core';
import { EditProfileFormModule } from '@dinary/ui-core/shared';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
	imports: [CommonModule, TranslatePipe, AuthRoutingModule, EditProfileFormModule],
	providers: [RoleService]
})
export class AuthModule {}
