import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users$: BehaviorSubject<User[]> = new BehaviorSubject([
    { usrName: 'premierA' },
    { usrName: 'deuxiemeB' },
    { usrName: 'troisiemeC' },
  ]);

  public selectedUser$: BehaviorSubject<User> = new BehaviorSubject(
    this.users$.value[0]
  );

  public selectUser(index: number): void {
    this.selectedUser$.next(this.users$.value[index]);
    console.log(
      'Dans service selected user ' + this.users$.value[index].usrName
    );
  }

  public addUser$(username: string): void {
    this.users$.next(this.users$.value.concat(<User>{ usrName: username }));
  }

  constructor() {
    console.log(this.users$.value[0]);
  }
}
