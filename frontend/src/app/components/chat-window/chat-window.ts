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
    { from: 'Jana', text: 'Hey 👋', time: '12:01' },
    { from: 'You', text: 'Hi Jana!', time: '12:02' },
    { from: 'Jana', text: 'Are you coming today?', time: '12:03' }
  ],

  2: [
    { from: 'Anđela', text: 'Can you wait a bit?', time: '11:50' },
    { from: 'You', text: 'Sure 👍', time: '11:51' },
    { from: 'Anđela', text: 'I’ll send it in 10 min 👍', time: '11:52' }
  ],

  3: [
    { from: 'David', text: 'Hey man', time: '10:10' },
    { from: 'David', text: 'Send me your Git repo pls', time: '10:11' },
    { from: 'You', text: 'Okay, sending it now', time: '10:12' }
  ],

  4: [
    { from: 'Stefan', text: 'Where are you?', time: '09:00' },
    { from: 'Stefan', text: 'We need to fix bugs before submission', time: '09:01' },
    { from: 'Stefan', text: 'Please answer', time: '09:02' }
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