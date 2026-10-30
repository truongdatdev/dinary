import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DinaryFormComponent } from './dinary-form.component';
describe('DinaryFormComponent', () => {
	let component: DinaryFormComponent;
	let fixture: ComponentFixture<DinaryFormComponent>;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DinaryFormComponent]
		}).compileComponents();
		fixture = TestBed.createComponent(DinaryFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
