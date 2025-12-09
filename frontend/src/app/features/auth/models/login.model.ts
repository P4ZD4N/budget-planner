import { FormControl } from '@angular/forms';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  jwt: string;
}

export interface LoginFormGroup {
  email: FormControl<string>;
  password: FormControl<string>;
}
