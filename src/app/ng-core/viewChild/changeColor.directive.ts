import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
	selector: '[v-color]'
})
export class ChangeColorDirective implements AfterViewInit {
	constructor(private ele: ElementRef) {
	}
	
	ngAfterViewInit() {
		console.info(this.ele);
	}
	
	change(color: String) {
		this.ele.nativeElement.style.color = color;
	}
	
	revert() {
		this.ele.nativeElement.style.color = 'initial';
	}
}