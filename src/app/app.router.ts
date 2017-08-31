import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';

// 一级路由
export const AppRoutes: Routes = [
	
	// 首页
	{
		path: 'index',
		component: IndexComponent
	},
	
	// 内置指令
	{
		path: 'directive',
		loadChildren: './ng-directive/ng-directive.module#NgDirectiveModule'
	},
	
	// 默认重定向到首页
	{
		path: '**',
		redirectTo: 'index'
	}

];

@NgModule({
	imports: [RouterModule.forRoot(AppRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
