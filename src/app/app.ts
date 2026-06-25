import { Component, signal } from '@angular/core';
import { ChatListComponent } from './components/chat-list/chat-list';
import { ChatWindowComponent } from './components/chat-window/chat-window';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChatListComponent, ChatWindowComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('sitapp');

  selectedUser = signal<any>(null);

  onUserSelected(user: any) {
    this.selectedUser.set(user);
  }
}