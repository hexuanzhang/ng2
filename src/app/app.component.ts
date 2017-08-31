import { Component, OnInit } from '@angular/core';

import { menus } from './cofig/menus';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	constructor() {}
	
	menu: any[] = menus;
	
	ngOnInit() {}
}
