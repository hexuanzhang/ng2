import { Component, ViewChild } from '@angular/core';
import { TodoInputComponent } from './todoInput.component';
import { Todo } from './todo.interface';
import { TodoList } from './todo.class';

@Component({
	selector: 'todo-app',
	viewProviders: [TodoList],
	templateUrl: './todoApp.html',
	styleUrls: ['./todoApp.scss']
})
export class TodoAppComponent {
	@ViewChild(TodoInputComponent) input: TodoInputComponent;
	
	constructor(public todos: TodoList) {
	}
	
	addTodo(todo: Todo) {
		this.todos.add(todo);
	}
	
	ngAfterViewInit() {
		// console.log(this.input);
	}
}