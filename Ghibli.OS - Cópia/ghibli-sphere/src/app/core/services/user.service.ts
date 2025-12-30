// user.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  // Avatar inicial padrão
  currentAvatar = signal<string>('avatars/test.jpg');

  changeAvatar(newPath: string) {
    this.currentAvatar.set(newPath);
  }
}