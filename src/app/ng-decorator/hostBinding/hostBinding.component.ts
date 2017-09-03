import { Component, Input, HostBinding } from '@angular/core';

@Component({
	selector: 'my-button',
	template: `
		<button buttonHover>hostBinding</button>
	`,
	styles: [`
		button {
			color: #03a9f4;
		}
		
		button.hover {
			color: blue;
		}
	`]
})
export class HostBindingComponent {
	constructor() {
	}
	
}