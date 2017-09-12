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
	
	// 装饰器
	{
		path: 'decorator',
		loadChildren: './ng-decorator/ng-decorator.module#NgDecoratorModule'
	},
	
	// core
	{
		path: 'core',
		loadChildren: './ng-core/ng-core.module#NgCoreModule'
	},
	
	{
		path: 'provider',
		loadChildren: './ng-provider/ng-provider.module#NgProviderModule'
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
