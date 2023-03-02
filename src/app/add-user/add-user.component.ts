import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../shared/interfaces/user.interface';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit, OnDestroy {
  @ViewChild('input') public el: ElementRef;

  public user: User;
  public users?: User[];
  public selectedUser!: User;

  public subscription: Subscription = new Subscription();

  constructor(private userService: UserService) {} // il faut probablement injecter un service ici !

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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addUser() {
    const username = this.el.nativeElement.value;
    if (username) {
      // on utilise le service ici pour ajouter l'utilisateur;$
      this.userService.addUser$(this.el.nativeElement.value);
      this.el.nativeElement.value = '';
    }
  }
}
