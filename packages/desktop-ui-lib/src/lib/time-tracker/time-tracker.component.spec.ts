import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeTrackerComponent } from './time-tracker.component';
import { AuthService, AuthStrategy } from '../auth/services';
import { environment } from '@dinary/ui-config';
import { DINARY_ENV } from '../constants';
describe('TimeTrackerComponent', () => {
	let component: TimeTrackerComponent;
	let fixture: ComponentFixture<TimeTrackerComponent>;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TimeTrackerComponent],
			// The desktop apps provide AuthStrategy, AuthService and this library's DINARY_ENV (the web
			// environment plus their own flags) at bootstrap (apps/desktop/src/main.ts).
			providers: [AuthStrategy, AuthService, { provide: DINARY_ENV, useValue: environment }]
		}).compileComponents();
	});
	beforeEach(() => {
		fixture = TestBed.createComponent(TimeTrackerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
