import { Component } from '@angular/core';
import { AuthenticationService } from '../../authentication';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
  constructor(private authenticationService: AuthenticationService) {}

  logout() {
    this.authenticationService.logout();
  }
}
