import { Injectable } from '@angular/core';
import {
  CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot
} from '@angular/router';

import { AuthenticationService } from './authentication.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthGuard {

  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (!!this.authService.token) {
      return true;
    }
    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
