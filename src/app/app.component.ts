import { Component } from '@angular/core';
import { User } from './models/user';
import { AuthService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public currentUser: User;
  constructor(private authenticationService: AuthService,) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  title = 'sidepanel-poc';

}
