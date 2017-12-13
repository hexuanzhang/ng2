import { Injectable } from '@angular/core';


@Injectable()
export class ComponentService {
	private createListeners = [];
	private destroyListeners = [];

	onContainerCreated(fn) {
		this.createListeners.push(fn);
	}

	onContainerDestroyed(fn) {
		this.destroyListeners.push(fn);
	}

	registerContainer(container) {
		this.createListeners.forEach((fn) => {
			fn(container);
		});
	}

	destroyContainer(container) {
		this.destroyListeners.forEach((fn) => {
			fn(container);
		});
	}
}
