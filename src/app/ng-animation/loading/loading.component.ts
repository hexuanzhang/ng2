import { Component, OnInit } from '@angular/core';
import { Loading01Animations, Loading02Animations } from '../animation-config';

@Component({
	selector: 'loading',
	templateUrl: './loading.html',
  styleUrls: ['./loading.scss'],
  animations: [
    Loading01Animations,
    Loading02Animations
  ]
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
