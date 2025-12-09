import { Routes } from '@angular/router';
import { RegisterViewComponent } from './features/auth/views/register/register-view.component';
import { ProfileViewComponent } from './features/user/views/profile-view.component';
import { LoginViewComponent } from './features/auth/views/login/login-view.component';
import { HomeViewComponent } from './features/home/home-view.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent,
  },
  {
    path: 'register',
    component: RegisterViewComponent,
  },
  {
    path: 'login',
    component: LoginViewComponent,
  },
  {
    path: 'me',
    component: ProfileViewComponent,
  },
];
