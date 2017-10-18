import { Component, OnInit } from '@angular/core';
import { LoadingAnimations } from '../animation-config';

@Component({
	selector: 'loading',
	templateUrl: './loading.html',
  styleUrls: ['./loading.scss'],
  animations: [LoadingAnimations]
})
export class LoadingComponent implements OnInit {

	constructor() {
	}

  loadingStatus: string = ''; 

	ngOnInit() {
	}

  toggleStatus() {
    this.loadingStatus = this.loadingStatus === 'start' ? 'end': 'start';
  }
}
