import { Directive, HostListener } from '@angular/core';

@Directive({
	selector: 'button[count]'
})
export class HostListenerDirective {
	numberOfClicks = 0;

	@HostListener('click', ['$event.target'])
	onClick(btn: HTMLElement) {
		console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
	}
}
