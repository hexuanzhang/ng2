import { Routes, RouterModule, Resolve } from '@angular/router';
import { NgOthersComponent } from '../ng-others/ng-others.component';
import { NgModule } from '@angular/core';

const childrenComponents = [
	{
		path: 'encrypt',
		loadChildren: '../ng-others/encrypt/encrypt.module#EncryptModule'
	},
	{
		path: '**',
		redirectTo: 'encrypt'
	}
];

export const NgOthersRouters: Routes = [
	{
		path: '',
		component: NgOthersComponent,
		children: childrenComponents
	}
];

@NgModule({
	imports: [RouterModule.forChild(NgOthersRouters)],
	exports: [RouterModule]
})
export class NgOthersRouter {
}
