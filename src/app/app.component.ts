import { Component } from '@angular/core';
import { AuthService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isUserLoggedIn = false;
  constructor(private authenticationService: AuthService,) {
    this.UserLoggedIn()
  }
  title = 'sidepanel-poc';
  public UserLoggedIn() {
    if(this.authenticationService.currentUserValue) {
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false; 
    }
  }
}
