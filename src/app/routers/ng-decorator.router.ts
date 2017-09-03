import { Routes, RouterModule, Resolve } from '@angular/router';
import { NgDecoratorComponent } from '../ng-decorator/ng-decorator.component';
import { NgModule } from '@angular/core';

let childrenComponents = [
	{
		path: 'hostListener',
		loadChildren: '../ng-decorator/hostListener/hostListener.module#NgClassModule'
	},
	{
		path: '**',
		redirectTo: 'hostListener'
	}
];

export const NgDecoratorRouters: Routes = [
	{
		path: '',
		component: NgDecoratorComponent,
		children: childrenComponents
	}
];

@NgModule({
	imports: [RouterModule.forChild(NgDecoratorRouters)],
	exports: [RouterModule]
})
export class NgDecoratorRouterModule {
}