import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './app-main-nav.component.html',
  styleUrls: ['./app-main-nav.component.scss']
})
export class AppMainNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,  private authenticationService: AuthService, private router: Router) {
  }
  
  public logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
