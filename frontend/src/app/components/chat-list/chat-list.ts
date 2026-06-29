import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-list.html',
  styleUrls: ['./chat-list.css']
})
export class ChatListComponent {

  @Output() userSelected = new EventEmitter<any>();

  selectedUserId: number | null = null;

 users = [
  {
    id: 1,
    name: 'Jana',
    lastMessage: 'Are you coming today?',
    unread: 2
  },
  {
    id: 2,
    name: 'Anđela',
    lastMessage: 'I’ll send it in 10 min 👍',
    unread: 0
  },
  {
    id: 3,
    name: 'David',
    lastMessage: 'Send me your Git repo pls',
    unread: 1
  },
  {
    id: 4,
    name: 'Stefan',
    lastMessage: 'We need to fix bugs before submission',
    unread: 3
  }
];

  selectUser(user: any) {
    this.selectedUserId = user.id;
    user.unread = 0;
    this.userSelected.emit(user);
  }
}