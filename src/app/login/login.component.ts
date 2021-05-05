import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form:FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  constructor(private fb:FormBuilder, 
               private authenticationService: AuthService,
               private route: ActivatedRoute,
               private router: Router) {
                if (this.authenticationService.currentUserValue) { 
                  this.router.navigate(['/']);
              }
    
  }
  ngOnInit() {
    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
  });
  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  login() {
      const val = this.form.value;

      if (val.email && val.password) {
          this.authenticationService.login(val.email, val.password) .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  this.error = error;
                  this.loading = false;
              });
      }
  }
}
