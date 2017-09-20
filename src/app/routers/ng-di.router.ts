import { Routes, RouterModule, Resolve } from '@angular/router';
import { NgDiComponent } from '../ng-di/ng-di.component';
import { NgModule } from '@angular/core';

let childrenComponents = [
  {
    path: 'reflectiveInjector',
    loadChildren: '../ng-di/reflectiveInjector/reflectiveInjector.module#ReflectiveInjectorModule'
  },
  {
    path: '**',
    redirectTo: 'reflectiveInjector'
  }
];

export const NgDiRouters: Routes = [
  {
    path: '',
    component: NgDiComponent,
    children: childrenComponents
  }
];

@NgModule({
  imports: [RouterModule.forChild(NgDiRouters)],
  exports: [RouterModule]
})
export class NgDiRouter {
}
