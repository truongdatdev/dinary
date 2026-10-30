import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DinaryFiltersComponent } from './dinary-filters.component';
import { DinaryFiltersModule } from './dinary-filters.module';
describe('DinaryFiltersComponent', () => {
	let component: DinaryFiltersComponent;
	let fixture: ComponentFixture<DinaryFiltersComponent>;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			// Not standalone: import its NgModule. (This stub imported `DinaryRangePickerComponent`, a class the file
			// does not export, so it declared `undefined`.)
			imports: [DinaryFiltersModule]
		}).compileComponents();
	});
	beforeEach(() => {
		fixture = TestBed.createComponent(DinaryFiltersComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
