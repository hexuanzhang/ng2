import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Todo } from './todo.interface';

@Component({
	selector: 'todo-input',
	template: `
		<input type="text" [(ngModel)]="title">
		<button nz-button [nzType]="'primary'" (click)="addTodo()">添加</button>
	`
})
export class TodoInputComponent {
	title: string;
	@Output() onTodo = new EventEmitter<Todo>();
	
	addTodo() {
		this.onTodo.emit({
			title: this.title,
			completed: false
		});
		this.title = '';
	}
}