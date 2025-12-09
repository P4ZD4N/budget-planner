import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  imports: [AsyncPipe],
})
export class ProfileViewComponent {
  private userService = inject(UserService);
  private authService = inject(AuthService);

  profile$ = this.userService.me();

  protected logout() {
    this.authService.logout();
  }
}
