import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


// 用于共享的 组件 指令 pipes 或者 服务，全局不唯一
// 全局唯一的定义在 app.module上
@NgModule({
	imports: [CommonModule, FormsModule, ReactiveFormsModule, NgZorroAntdModule.forRoot()],
	declarations: [],
	exports: [CommonModule, FormsModule, ReactiveFormsModule, NgZorroAntdModule],
	providers: [],
	entryComponents: []
})
export class SharedModule {
	static share(): ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: []
		};
	}
	
}
