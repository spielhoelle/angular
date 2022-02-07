import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';
export interface Observer<T> {
	isUnsubscribed?: boolean;
	next: (value: T) => void;
	error: (err: any) => void;
	complete: () => void;
}
@Component({
	selector: 'async-observable-pipe',
	template: '<div><code>observable|async</code>: Time: {{ time | async }}</div>'
})
export class TestComponent {
	time = new Observable<string>((observer: Observer<string>) => {
		setInterval(() => observer.next(new Date().toString()), 1000);
	});
}