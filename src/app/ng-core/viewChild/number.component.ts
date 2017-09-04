import { Component } from '@angular/core';

@Component({
	selector: 'app-number',
	template: '<p>{{message}}</p>'
})
export class NumberComponent {
	message: string = 'Counter：0';
	count: number = 0;
	
	increaseByOne() {
		this.message = `Counter: ${++this.count}`;
	}
	
	decreaseByOne() {
		this.message = `Counter: ${--this.count}`;
	}
}