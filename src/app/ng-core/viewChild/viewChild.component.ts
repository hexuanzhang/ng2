import { Component, ViewChild, ElementRef } from '@angular/core';
import { NumberComponent } from './number.component';
import { ChangeColorDirective } from './changeColor.directive';

@Component({
	selector: 'viewChild',
	templateUrl: './viewChild.html',
	styleUrls: ['./viewChild.scss']
})
export class ViewChildComponent {

	@ViewChild(NumberComponent) number: NumberComponent;

	@ViewChild(ChangeColorDirective) color: ChangeColorDirective;

	@ViewChild('input') input: ElementRef;

	increase() {
		this.number.increaseByOne();
	}

	decrease() {
		this.number.decreaseByOne();
	}

	changeColor(color: string) {
		this.color.change(color);
	}

	changeInput() {
		this.input.nativeElement.style.width = '300px';
	}
}
