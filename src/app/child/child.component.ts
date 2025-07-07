import { Component , Input , Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../message.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-child',
  imports: [FormsModule,CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  messageToParent = '';
  messagesFromParent: string[] = [];

  constructor(private messageService: MessageService) {
    this.messageService.childMessages$.subscribe(msgs => this.messagesFromParent = msgs);
  }

  sendMessage() {
    if (this.messageToParent.trim()) {
      this.messageService.sendToParent(this.messageToParent);
      this.messageToParent = '';
    }
  }

}
