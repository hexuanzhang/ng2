import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';

// 一级路由
export const AppRoutes: Routes = [

	// 首页
	{
		path: 'index',
		component: IndexComponent,
		data: {
			animation: 'index'
		}
	},

	// 内置指令
	{
		path: 'directive',
		loadChildren: './ng-directive/ng-directive.module#NgDirectiveModule',
		data: {
			animation: 'directive'
		}
	},

	// 装饰器
	{
		path: 'decorator',
		loadChildren: './ng-decorator/ng-decorator.module#NgDecoratorModule',
		data: {
			animation: 'decorator'
		}
	},

	// core
	{
		path: 'core',
		loadChildren: './ng-core/ng-core.module#NgCoreModule',
		data: {
			animation: 'core'
		}
	},

	{
		path: 'provider',
		loadChildren: './ng-provider/ng-provider.module#NgProviderModule',
		data: {
			animation: 'provider'
		}
	},

	// di
	{
		path: 'di',
		loadChildren: './ng-di/ng-di.module#NgDiModule',
		data: {
			animation: 'di'
		}
	},

	// animation
	{
		path: 'animation',
		loadChildren: './ng-animation/ng-animation.module#NgAnimationModule',
		data: {
			animation: 'animation'
		}
	},

	// others
	{
		path: 'others',
		loadChildren: './ng-others/ng-others.module#NgOthersModule',
		data: {
			animation: 'others'
		}
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
