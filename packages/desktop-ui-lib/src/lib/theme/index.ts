import { CommonModule } from '@angular/common';
import { NgModule, inject, provideAppInitializer } from '@angular/core';
import { ElectronService } from '../electron/services';
import {
    NbThemeModule,
    NbThemeService
} from '@nebular/theme';
import { ThemeInitializerFactory } from './theme-initializer.factory';
import {
    DINARY_DARK,
    DINARY_LIGHT
} from './styles';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        NbThemeModule.forRoot({ name: DINARY_LIGHT.name }, [
            DINARY_LIGHT,
            DINARY_DARK
        ])
    ],
    providers: [
        NbThemeService,
        provideAppInitializer(() => {
        const initializerFn = (ThemeInitializerFactory)(inject(NbThemeService), inject(ElectronService));
        return initializerFn();
      })
    ],
    exports: [NbThemeModule]
})
export class NgxDesktopThemeModule { }
