import { Component, OnInit } from '@angular/core';

@Component ({
	selector: 'ng-class',
	templateUrl: './ng-class.html',
	styles: [`
		p {
			margin: 10px  0;
		}
		.blue {
			color: blue;
		}
		.disabled {
			color: #ccc;
		}
		.active {
			color: darkblue;
		}
	`]
})
export class NgClassComponent implements OnInit {
	constructor () {}
	
	isActive: boolean;
	
	ngOnInit() {
		this.isActive = true;
	}
	
	calculateClasses() {
		
		/* 可以返回 string、string[]、obj */
		return {
			btn: true,
			'btn-primary': this.isActive
		}
	}
}