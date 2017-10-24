import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AnimationBuilder, style, transition, animate, keyframes,
  stagger, AnimationPlayer
} from '@angular/animations';
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
  constructor(public builder: AnimationBuilder) {
  }

  @ViewChild('box06') box06;
  player: AnimationPlayer;

  loadingStatus: string = '';
  items: number[] = [];
  items02: number[] = [];

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.items = this.items02 = [1, 2, 3, 4, 5];
  }

  toggleStatus() {
    const r: number = Math.ceil(Math.random() * 100);
    this.loadingStatus = this.loadingStatus === 'start' ? 'end' : 'start';
    this.items = this.items02 = [];

    setTimeout(() => {
      this.items = this.items02 = [r + 1, r + 2, r + 3, r + 4, r + 5];
    }, 500);

    const factory = this.builder.build([
      animate("1s ease-out", keyframes([
        style({ transform: "scale(0)", opacity: "0", offset: 0}),
        style({ transform: "scale(.5)", opacity: "1", offset: 0.5} ),
        style({ transform: "scale(1)", opacity: "0", offset: 0.75} ),
        style({ transform: "scale(1)", opacity: "1", offset: 1} )
      ]))
    ]);
    this.player = factory.create(this.box06.nativeElement,{});
    this.player.play();
  }
}
