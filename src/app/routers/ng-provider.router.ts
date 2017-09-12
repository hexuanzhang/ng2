import { Routes, RouterModule, Resolve } from '@angular/router';
import { NgProviderComponent } from '../ng-provider/ng-provider.component';
import { NgModule } from '@angular/core';

let childrenComponents = [
	{
		path: 'useClass',
		loadChildren: '../ng-provider/useClass/useClass.module#UseClassModule'
	},
	{
		path: '**',
		redirectTo: 'useClass'
	}
];

export const NgProviderRouters: Routes = [
	{
		path: '',
		component: NgProviderComponent,
		children: childrenComponents
	}
];

@NgModule({
	imports: [RouterModule.forChild(NgProviderRouters)],
	exports: [RouterModule]
})
export class NgProviderRouter {
}