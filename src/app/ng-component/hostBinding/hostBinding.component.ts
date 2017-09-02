import { Component, Input, HostBinding } from '@angular/core';

@Component({
	selector: 'my-button',
	template: `
		<div>
			My width is {{150}}
		</div>
	`
})
export class ButtonComponent {
	
	@HostBinding('style.width.px')
	@Input() boxWidth: number;
	
	constructor() {
		this.boxWidth = 150;
	}
	
}