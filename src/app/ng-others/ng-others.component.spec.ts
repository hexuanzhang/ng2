import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOthersComponent } from './ng-others.component';

describe('OthersComponent', () => {
	let component: NgOthersComponent;
	let fixture: ComponentFixture<NgOthersComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgOthersComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgOthersComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
