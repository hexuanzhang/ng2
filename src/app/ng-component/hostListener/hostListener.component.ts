import { Component, Input, HostListener } from '@angular/core';

@Component({
	selector: 'my-button',
	template: `
		<div>{{time}}</div>
	`
})
export class ButtonComponent {
	
	time: any;
	
	@HostListener('click', ['$event.target'])
	onClick(target) {
		this.time = new Date().toString();
	}
	
}