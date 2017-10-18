import { trigger, state, style, transition, animate, keyframes, animation, useAnimation, query } from  '@angular/animations';

// animations
const Loading02Animation = animation([
  animate("{{ timing }}", keyframes([
    style({ transform: "{{ step1-transform }}", opacity: "{{ step1-opacity }}"} ),
    style({ transform: "{{ step2-transform }}", opacity: "{{ step2-opacity }}"} ),
    style({ transform: "{{ step3-transform }}", opacity: "{{ step3-opacity }}"} )
  ]))
]);

const loadingAnimate = animate('3.5s linear',keyframes([
  style({transform: 'rotate(0deg)', offset: 0}),
  style({transform: 'rotate(180deg)', offset: 0.5}),
  style({transform: 'rotate(360deg)', offset: 1}),
]));

export const Loading01Animations = [
    trigger('loading01Trigger', [
        transition('void => *, start => end, end => start', [loadingAnimate])
    ])
];

export const Loading02Animations = [
  trigger('loading02Trigger', [
    transition('void => *, end => start, start => end', [useAnimation(Loading02Animation, {
      params: {
        timing: '1s ease-out',
        'step1-transform': 'scale(0)',
        'step1-opacity': '0',
        'step2-transform': 'scale(.5)',
        'step2-opacity' : '1',
        'step3-transform': 'scale(1)',
        'step3-opacity': '0'
      }
    })])
  ])
];

export const Loading04Animations = [
  trigger('loading04Trigger', [
    transition('void => *, end => start, start => end',[
      query('.box-04 div', [loadingAnimate])
    ])
  ])
];
