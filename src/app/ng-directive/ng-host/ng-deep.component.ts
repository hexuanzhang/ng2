import { Component } from '@angular/core';

@Component ({
	selector: 'ng-deep',
	template: `
		<h3>::ng-deep 选择器</h3>
		<p>应用于组件内所有符合条件的元素，包括子组件符合条件的元素</p>
	`,
})
export class NgDeepComponent {
	
	constructor() {}
}