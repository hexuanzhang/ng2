import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { trigger, state, transition, style, animate, AnimationEvent} from '@angular/animations';
import { LoadingAnimations } from '../animation-config';

@Component({
	selector: 'loading',
	templateUrl: './loading.html',
  styleUrls: ['./loading.scss'],
  animations: [LoadingAnimations]
})
export class LoadingComponent implements OnInit {

	constructor(public cdr: ChangeDetectorRef) {
	}

  loadingStatus: string;

	ngOnInit() {
	}

  toggleStatus() {
    // this.loadingStatus = `${Math.random() * 100}`;
    //this.detection();
  }

  detection() {
	  this.cdr.detectChanges();
  }
}
