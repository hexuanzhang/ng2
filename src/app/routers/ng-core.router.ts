import { Routes, RouterModule, Resolve } from '@angular/router';
import { NgCoreComponent } from '../ng-core/ng-core.component';
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

export const NgCoreRouters: Routes = [
	{
		path: '',
		component: NgCoreComponent,
		children: childrenComponents
	}
];

@NgModule({
	imports: [RouterModule.forChild(NgCoreRouters)],
	exports: [RouterModule]
})
export class NgCoreRouterModule {
}