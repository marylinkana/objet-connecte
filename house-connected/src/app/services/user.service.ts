import { User } from '../models/User.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class UserService {
  private lesUsers: User[] = [];

  constructor(private httpClient: HttpClient){  }

  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.lesUsers.slice());
  }

  addUser(user: User) {
    this.lesUsers.push(user);
    this.emitUsers();
  }

  getUsersFromServer() {
    this.httpClient
      .get<any[]>('https://house-connected.firebaseio.com/lesUsers.json')
      .subscribe(
        (response) => {
          this.lesUsers = response;
          this.emitUsers();
          console.log('récupération terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  saveUsersToServer() {
    this.httpClient
      .put('https://house-connected.firebaseio.com/lesUsers.json', this.lesUsers)
      .subscribe(
        () => {
          console.log('Sauvegarde terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
