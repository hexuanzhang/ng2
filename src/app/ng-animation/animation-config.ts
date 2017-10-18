import { trigger, state, style, transition, animate, keyframes, animation } from  '@angular/animations';

// animations
const LoadingAnimation = animation([

]);

const loadingAnimate = animate('3.5s linear',keyframes([
  style({transform: 'rotate(0deg)', offset: 0}),
  style({transform: 'rotate(180deg)', offset: 0.5}),
  style({transform: 'rotate(360deg)', offset: 1}),
]));

export const LoadingAnimations = [
    trigger('loadingTrigger', [
        transition('void => *, start => end, end => start', [loadingAnimate])
    ])
];

export const LoadingDelayAnimations = [
  trigger('loadingDelayTrigger', [
    transition('void => *, start => end, end => start', [loadingAnimate], {
      delay: 10
    })
  ])
];
