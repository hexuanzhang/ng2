import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
	selector: '[buttonHover]'
	// host: {
	// 	'role': 'button',
	// 	'[class.hover]': 'isFocus'
	// }
})
export class HostBindingDirective {
	@HostBinding('attr.role') role = 'button';
	@HostBinding('class.hover') isFocus: boolean;

	@HostListener('focus')
	focus() {
		this.isFocus = true;
	}

	@HostListener('blur')
	blur() {
		this.isFocus = false;
	}
}
