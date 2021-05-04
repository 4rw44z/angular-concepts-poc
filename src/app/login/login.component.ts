import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form:FormGroup;
  constructor(private fb:FormBuilder, 
               private authService: AuthService, 
               private router: Router) {

    
  }
  ngOnInit() {
    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
  });
  }
  login() {
      const val = this.form.value;

      if (val.email && val.password) {
          // this.authService.login(val.email, val.password)
          //     .subscribe(
          //         () => {
          //             console.log("User is logged in");
          //             this.router.navigateByUrl('/');
          //         }
          //     );
          this.authService.login(this.form.value).subscribe((result) => {
            if(result.success) {
              console.log(result);
            }
            else {
              console.log(result);
            }
          })
      }
  }
}
