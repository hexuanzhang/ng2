import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Todo } from './todo.interface';

@Component({
	selector: 'todo-item',
	styles: [`
		.completed {
			text-decoration: line-through;
		}
	`],
	template: `
		<div [class.completed]='todo.completed'>
			<input type='checkbox'
			       [(ngModel)]='todo.completed'
			       (change)='completionChanged(todo)'>
			{{todo.title}}
		</div>
	`
})
export class TodoComponent {
	@Output() onCompletionChange = new EventEmitter<Todo>();
	@Input() todo: Todo;

	completionChanged(todo: Todo) {
		this.onCompletionChange.emit(todo);
	}
}

