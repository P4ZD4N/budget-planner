import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
  imports: [AsyncPipe, FormsModule, CurrencyPipe],
})
export class ProfileViewComponent {
  private router = inject(Router);
  private userService = inject(UserService);
  private authService = inject(AuthService);

  profile$ = this.userService.me();

  // MOCK

  selectedMonth = 'Październik';
  months = [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec',
    'Sierpień',
    'Wrzesień',
    'Październik',
    'Listopad',
    'Grudzień',
  ];

  categories = [
    { name: 'Jedzenie', amount: 1200 },
    { name: 'Transport', amount: 300 },
    { name: 'Rozrywka', amount: 450 },
    { name: 'Oszczędności', amount: 800 },
  ];

  get totalBudget() {
    return this.categories.reduce((sum, c) => sum + c.amount, 0);
  }

  newCategoryName = '';
  newCategoryAmount = 0;

  addCategory() {
    if (this.newCategoryName && this.newCategoryAmount > 0) {
      this.categories.push({
        name: this.newCategoryName,
        amount: this.newCategoryAmount,
      });
      this.newCategoryName = '';
      this.newCategoryAmount = 0;
    }
  }

  //

  protected logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.authService.logout().subscribe();
  }
}
