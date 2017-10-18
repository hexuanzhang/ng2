import { Component, OnInit } from '@angular/core';
import { Loading01Animations, Loading02Animations, Loading04Animations, ListAnimations } from '../animation-config';

@Component({
	selector: 'loading',
	templateUrl: './loading.html',
  styleUrls: ['./loading.scss'],
  animations: [
    Loading01Animations,
    Loading02Animations,
    Loading04Animations,
    ListAnimations
  ]
})
export class LoadingComponent implements OnInit {

	constructor() {
	}

  loadingStatus: string = '';
  items: number[] = [];

	ngOnInit() {
	}

  ngAfterViewInit() {
	  this.items = [1, 2, 3, 4, 5];
  }

  toggleStatus() {
	  const r: number = Math.ceil(Math.random() * 100);
    this.loadingStatus = this.loadingStatus === 'start' ? 'end': 'start';
    this.items = [];

    setTimeout(() => {
      this.items = [r + 1, r + 2, r + 3, r + 4, r + 5];
    }, 500);

  }
}
