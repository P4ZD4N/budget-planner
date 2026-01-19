import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest, LoginResponse } from '../models/login.model';
import { LogoutResponse } from '../models/logout.model';
import { RegisterRequest, RegisterResponse } from '../models/register.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_URL = 'http://localhost:8001/api/auth';
  private readonly http = inject(HttpClient);

  register(request: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.API_URL}/register`, request, {
      withCredentials: true,
    });
  }

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}/login`, request, {
      withCredentials: true,
    });
  }

  logout(): Observable<LogoutResponse> {
    return this.http.post<LogoutResponse>(`${this.API_URL}/logout`, { withCredentials: true });
  }
}
