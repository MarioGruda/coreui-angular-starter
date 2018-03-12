import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthenticationService } from './authentication.service';

import { environment } from 'environments/environment';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  canActivate(): boolean {
    if (this.authenticationService.isAuthenticated() || environment.disableLogin) {
      return true;
    }

    this.router.navigate(['/login'], { replaceUrl: true });
    return false;
  }
}
