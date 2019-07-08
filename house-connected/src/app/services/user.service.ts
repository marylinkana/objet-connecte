import { User } from '../models/User.model';
import { Subject } from 'rxjs/Subject';

export class UserService {
  private users: User[] = [
    {
      firstName: 'Baudoin',
      lastName: 'Kana',
      email: 'baudoin@kana.com',
      drinkPreference: 'orangina',
      hobbies: [
        'coder',
        'la méditation',
      ]
    }
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
