import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'Rxjs';

@Component({
	selector: 'ng-if',
	templateUrl: './ng-if.html'
})
export class NgIfComponent implements OnInit {

	constructor() { }

	isActive: boolean = false;
	asyncObj: Observable<any>;

	condition: string = 'locale';

	ngOnInit() {
		this.asyncObj = this.getObservable();
	}

	getObservable(): Observable<any> {
		return Observable
			.interval(1000)
			.take(10)
			.map(v => {
				return v % 5 === 0 ? null : {
					num: v,
					bool: v % 2 === 0
				};
			});
	}
}
