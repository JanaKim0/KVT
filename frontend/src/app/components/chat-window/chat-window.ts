import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-window.html',
  styleUrls: ['./chat-window.css']
})
export class ChatWindowComponent {

  @Input() user: any;

 messagesByUserId: any = {
  1: [
    { from: 'Jana', text: 'Hey 👋', time: '12:01' }
  ],
  2: [
    { from: 'Anđela', text: 'See you later', time: '12:01' }
  ],
  3: [
    { from: 'David', text: 'Ok 👍', time: '12:01' }
  ],
  4: [
    { from: 'Stefan', text: 'Where are you?', time: '12:01' }
  ]
};

  newMessage: string = '';

  get messages() {
    if (!this.user) return [];
    return this.messagesByUserId[this.user.id] || [];
  }

  sendMessage(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (!this.newMessage.trim() || !this.user) return;

    const now = new Date();
    const time = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });

    const msg = {
      from: 'You',
      text: this.newMessage,
      time
    };

    // 👇 добавляем в нужный чат
    if (!this.messagesByUserId[this.user.id]) {
      this.messagesByUserId[this.user.id] = [];
    }

    this.messagesByUserId[this.user.id].push(msg);

    this.newMessage = '';
  }
}