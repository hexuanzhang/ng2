import { Component } from '@angular/core';

@Component ({
	selector: 'ng-host-context',
	templateUrl: './ng-host-context.html',
	styles: [`
		:host-context(.content) h3 {
			color: #03a9f4;
		}
		
		:host-context(.content) p {
			color: #03a9f4;
		}
	`]
})
export class NgHostContextComponent {
	
	constructor() {}
}