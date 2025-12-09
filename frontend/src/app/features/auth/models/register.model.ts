import { FormControl } from '@angular/forms';

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  id: number;
  name: string;
  email: string;
}

export interface RegisterFormGroup {
  name: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}
