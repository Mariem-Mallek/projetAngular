import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../message.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-parent',
  imports: [FormsModule,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  messageToChild = '';
  messagesFromChild: string[] = [];

  constructor(private messageService: MessageService) {
    this.messageService.parentMessages$.subscribe(msgs => this.messagesFromChild = msgs);
  }

  sendMessage() {
    if (this.messageToChild.trim()) {
      this.messageService.sendToChild(this.messageToChild);
      this.messageToChild = '';
    }
  }


}
