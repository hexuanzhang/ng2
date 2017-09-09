import { Component, OnInit } from '@angular/core';

@Component ({
	selector: 'ng-hidden',
	templateUrl: './ng-hidden.html',
	styles: [`
		div {
			margin-bottom: 15px;
		}
		.flex {
			display: flex;
		}
	`]
})
export class NgHiddenComponent implements OnInit {
	constructor () {}
	
	isHidden: boolean;
	
	ngOnInit() {
		this.isHidden = false;
	}
	
	switchStatus() {
		this.isHidden = !this.isHidden;
	}
}