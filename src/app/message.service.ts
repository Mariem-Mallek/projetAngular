import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private parentMessages = new BehaviorSubject<string[]>([]);
  private childMessages = new BehaviorSubject<string[]>([]);

  parentMessages$ = this.parentMessages.asObservable();
  childMessages$ = this.childMessages.asObservable();

  sendToParent(msg: string) {
    this.parentMessages.next([...this.parentMessages.value, msg]);
  }

  sendToChild(msg: string) {
    this.childMessages.next([...this.childMessages.value, msg]);
  }
}