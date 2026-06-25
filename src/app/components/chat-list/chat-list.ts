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
    { id: 1, name: 'Ana', lastMessage: 'Hey 👋', unread: 2 },
    { id: 2, name: 'Marko', lastMessage: 'See you later', unread: 0 },
    { id: 3, name: 'Jelena', lastMessage: 'Ok 👍', unread: 5 },
    { id: 4, name: 'Petar', lastMessage: 'Where are you?', unread: 1 }
  ];

  selectUser(user: any) {
    this.selectedUserId = user.id;
    user.unread = 0; // 👈 считаем что прочитали
    this.userSelected.emit(user);
  }
}