import { Routes, RouterModule, Resolve } from '@angular/router';
import { NgDirectiveComponent } from '../ng-directive/ng-directive.component';
import { NgModule } from '@angular/core';

let childrenComponents = [
	{
		path: 'ng-class',
		loadChildren: '../ng-directive/ng-class/ng-class.module#NgClassModule'
	},
	{
		path: 'ng-for',
		loadChildren: '../ng-directive/ng-for/ng-for.module#NgForModule'
	},
	{
		path: 'ng-style',
		loadChildren: '../ng-directive/ng-style/ng-style.module#NgStyleModule'
	},
	{
		path: 'ng-for',
		loadChildren: '../ng-directive/ng-for/ng-for.module#NgForModule'
	},
	{
		path: '**',
		redirectTo: 'ng-class'
	}
];

export const AgDirectiveRouters: Routes = [
	{
		path: '',
		component: NgDirectiveComponent,
		children: childrenComponents
	}
];

@NgModule({
	imports: [RouterModule.forChild(AgDirectiveRouters)],
	exports: [RouterModule]
})
export class NgDirectiveRoutingModule {
}