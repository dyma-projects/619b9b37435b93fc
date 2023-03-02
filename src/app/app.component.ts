import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from './shared/interfaces/user.interface';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projet5-service';

  public selectedUser!: User;
  public users!: User[];
  public subscription: Subscription = new Subscription();

  public user: User;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
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

  public selectUser(index: number) {
    this.userService.selectUser(index);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
