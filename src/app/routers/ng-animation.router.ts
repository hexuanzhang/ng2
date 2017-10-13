import { Routes, RouterModule, Resolve } from '@angular/router';
import { NgAnimationComponent } from '../ng-animation/ng-animation.component';
import { NgModule } from '@angular/core';

let childrenComponents = [
  {
    path: 'viewChild',
    loadChildren: '../ng-core/viewChild/viewChild.module#ViewChildModule'
  },
  {
    path: '**',
    redirectTo: 'viewChild'
  }
];

export const NgAnimationRouters: Routes = [
  {
    path: '',
    component: NgAnimationComponent,
    children: childrenComponents
  }
];

@NgModule({
  imports: [RouterModule.forChild(NgAnimationRouters)],
  exports: [RouterModule]
})
export class NgAnimationRouter {
}
