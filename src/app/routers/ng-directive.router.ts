import { Routes, RouterModule, Resolve } from '@angular/router';
import { NgDirectiveComponent } from '../ng-directive/ng-directive.component';
import { NgModule } from '@angular/core';

const childrenComponents = [
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
		path: 'ng-if',
		loadChildren: '../ng-directive/ng-if/ng-if.module#NgIfModule'
	},
	{
		path: 'ng-host',
		loadChildren: '../ng-directive/ng-host/ng-host.module#NgHostModule'
	},
	{
		path: 'ng-host-context',
		loadChildren: '../ng-directive/ng-host-context/ng-host-context.module#NgHostContextModule'
	},
	{
		path: 'ng-hidden',
		loadChildren: '../ng-directive/ng-hidden/ng-hidden.module#NgHiddenModule'
	},
	{
		path: 'ng-template-outlet',
		loadChildren: '../ng-directive/ng-template-outlet/ng-template-outlet.module#NgTemplateOutleteModule'
	},
	{
		path: '**',
		redirectTo: 'ng-class'
	}
];

export const NgDirectiveRouters: Routes = [
	{
		path: '',
		component: NgDirectiveComponent,
		children: childrenComponents
	}
];

@NgModule({
	imports: [RouterModule.forChild(NgDirectiveRouters)],
	exports: [RouterModule]
})
export class NgDirectiveRoutingModule {
}
