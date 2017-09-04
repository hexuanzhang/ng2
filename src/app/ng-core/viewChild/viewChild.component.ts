import { Component, ViewChild } from '@angular/core';
import { NumberComponent } from './number.component';

@Component({
	selector: 'viewChild',
	templateUrl: './viewChild.html'
})
export class ViewChildComponent {
	@ViewChild(NumberComponent) numberComponent: NumberComponent;
	
	increase() {
		this.numberComponent.increaseByOne();
	}
	
	decrease() {
		this.numberComponent.decreaseByOne();
	}
}