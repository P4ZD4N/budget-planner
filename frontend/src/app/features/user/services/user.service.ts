import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileResponse } from '../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly API_URL = 'http://localhost:8001/api/user'
  private readonly http = inject(HttpClient);
  
  me(): Observable<ProfileResponse> {
    return this.http.get<ProfileResponse>(`${this.API_URL}/me`, { withCredentials: true });
  }
}
