import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageElectronService } from '@dinary/desktop-ui-lib';

@Component({
	selector: 'dinary-root',
	template: '<router-outlet></router-outlet>',
	changeDetection: ChangeDetectionStrategy.Eager,
	imports: [RouterOutlet]
})
export class AppComponent implements OnInit {
	constructor(private readonly languageElectronService: LanguageElectronService) {}

	ngOnInit(): void {
		this.languageElectronService.initialize<void>();
	}
}
