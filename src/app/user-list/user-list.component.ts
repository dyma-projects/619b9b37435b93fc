import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../shared/interfaces/user.interface';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  public user: User;
  public users?: User[];
  public selectedUser!: User;

  public subscription: Subscription = new Subscription();

  constructor(
    private userService: UserService // il faut probablement injecter un service ici !
  ) {}

  public selectUser(index: number): void {
    this.userService.selectUser(index);
  }

  ngOnInit(): void {
    // il faut initialiser les users ici avec le service
    this.subscription.add(
      this.userService.users$.subscribe((users: User[]) => {
        this.users = users;
      })
    );

    this.subscription.add(
      this.userService.selectedUser$.subscribe((selectedUser: User) => {
        this.selectedUser = selectedUser;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
