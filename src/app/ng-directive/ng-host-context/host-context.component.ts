import { Component } from '@angular/core';

@Component ({
	selector: 'host-context',
	template: `
		<p>可以通过组件外的选择器来匹配组件内部的元素，但无法匹配子组件的元素</p>
	`,
	styleUrls: ['./host-context.scss']
})
export class HostContextComponent {
	
	constructor() {}
}