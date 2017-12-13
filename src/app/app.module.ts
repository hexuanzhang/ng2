import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AppRoutingModule } from './app.router';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { InjectorComponent } from './ng-di/injector/injector.component';

@NgModule({
	declarations: [
		AppComponent,
		IndexComponent,
		InjectorComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		HttpModule,
		BrowserAnimationsModule,
		SharedModule.share()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
