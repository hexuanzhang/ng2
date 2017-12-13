import { Component, Input } from '@angular/core';

@Component({
	selector: 'contact-card',
	template: `
		<p class='contact-card'>{{contact.name}} -- {{contact.age}} -- {{contact.email}}</p>
	`
})
export class ContactCardComponent {
	@Input() contact: any;

	constructor() {

	}
}
