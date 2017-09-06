import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ViewChildComponent } from './viewChild.component';
import { NumberComponent } from './number.component';
import { ChangeColorDirective } from './changeColor.directive'

import { TodoComponent } from './todo/todo.component';
import { TodoInputComponent } from './todo/todoInput.component';
import { TodoFootComponent } from './todo/todoFoot.component';
import { TodoAppComponent } from './todo/todoApp.component';
import { TodoList } from './todo/todo.class';

const component = ViewChildComponent;

const UIRouters: Routes = [
	{
		path: '', component
	}
];

const UIRouting = RouterModule.forChild(UIRouters);

@NgModule({
	imports: [UIRouting],
	exports: [RouterModule]
})
export class RoutingModule {
}

@NgModule({
	imports: [RoutingModule, SharedModule.share()],
	declarations: [component, NumberComponent, ChangeColorDirective, TodoComponent, TodoInputComponent, TodoFootComponent, TodoAppComponent],
	providers: [TodoList]
})

export class ViewChildModule {
}