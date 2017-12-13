import { Routes, RouterModule, Resolve } from '@angular/router';
import { NgAnimationComponent } from '../ng-animation/ng-animation.component';
import { NgModule } from '@angular/core';

const childrenComponents = [
	{
		path: 'loading',
		loadChildren: '../ng-animation/loading/loading.module#LoadingModule'
	},
	{
		path: '**',
		redirectTo: 'loading'
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
