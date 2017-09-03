import { Component, HostListener } from '@angular/core';

@Component({
	selector: 'my-button',
	template: `
		<h3 highlight>hostlistener（点击可高亮）</h3>
		<button count>点击按钮</button>
	`
})
export class HostListenerComponent {
	
	time: any;
	
	@HostListener('click', ['$event.target'])
	onClick(target) {
		this.time = new Date().toString();
	}
	
}