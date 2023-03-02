import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { SelectedDirective } from './shared/directives/selected.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserListComponent,
    SelectedDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
