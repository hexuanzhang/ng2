import { Routes, RouterModule, Resolve } from '@angular/router';
import { NgProviderComponent } from '../ng-provider/ng-provider.component';
import { NgModule } from '@angular/core';

const childrenComponents = [
	{
		path: 'useClass',
		loadChildren: '../ng-provider/useClass/useClass.module#UseClassModule'
	},
	{
		path: 'useValue',
		loadChildren: '../ng-provider/useValue/useValue.module#UseValueModule'
	},
	{
		path: 'useExisting',
		loadChildren: '../ng-provider/useExisting/useExisting.module#UseExistingModule'
	},
	{
		path: 'useFactory',
		loadChildren: '../ng-provider/useFactory/useFactory.module#UseFactoryModule'
	},
	{
		path: 'stringToken',
		loadChildren: '../ng-provider/stringToken/stringToken.module#StringTokenModule'
	},
	{
		path: 'opaqueToken',
		loadChildren: '../ng-provider/opaqueToken/opaqueToken.module#OpaqueTokenModule'
	},
	{
		path: 'injectionToken',
		loadChildren: '../ng-provider/injectionToken/injectionToken.module#InjectionTokenModule'
	},
	{
		path: 'optional',
		loadChildren: '../ng-provider/optional/optional.module#OptionalModule'
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
