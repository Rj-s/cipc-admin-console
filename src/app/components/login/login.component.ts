import { Component, OnInit } from '@angular/core';
import { AuthenticationService, LoginDetail } from '../../services';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginDetail: LoginDetail;
  loginError: String;
  isLoggedIn: Boolean;

  constructor(
    private authService: AuthenticationService,
    public router: Router, 
    private fb: FormBuilder
  ) { 
    this.createForm();
  }

  ngOnInit() {
    this.authService.IsUserAuthenticated().subscribe(response => {
      this.isLoggedIn = response;
      console.log('response', response);
    });
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.loginError = '';
    this.loginDetail = new LoginDetail(this.loginForm.get('email').value, this.loginForm.get('password').value);
    
    this.authService.quickAuth()
    /*this.authService.login(this.loginDetail).then(response => {
      if (!!response.accessToken) {
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/login';
        if (response.user.isAdmin) {
          this.router.navigate(['/']);
        } else {
          this.router.navigate([redirect]);
        }
      }
    }, err => {
      this.loginError = err;
    });*/
  }

  logout() {
    this.authService.logout();
  }

  doAnnualReturns(event: any) {
    event.preventDefault();
    this.router.navigate(['/admin/annual-returns']);
  }
  
  doCompanyRegistations(event: any){
    event.preventDefault();
    this.router.navigate(['/admin/cipc']);
  }


}
