import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RegisterFormGroup } from '../../models/register.model';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  imports: [ReactiveFormsModule],
})
export class RegisterViewComponent {
  private readonly authService = inject(AuthService);
  protected readonly registerForm: FormGroup = new FormGroup<RegisterFormGroup>({
    name: new FormControl('', { nonNullable: true, validators: Validators.required }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', { nonNullable: true, validators: Validators.required }),
  });

  protected submit(): void {
    if (this.registerForm.invalid) return;

    this.authService.register(this.registerForm.value).subscribe({
      next: () => this.registerForm.reset(),
      error: (err) => console.error(err),
    });
  }
}
