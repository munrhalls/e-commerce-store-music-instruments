import { Component } from '@angular/core';
import { faCircle, faClose } from '@fortawesome/free-solid-svg-icons';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email] as ((
      control: AbstractControl
    ) => ValidationErrors | null)[]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ] as ((control: AbstractControl) => ValidationErrors | null)[]),
  });
  public faCircle = faCircle;
  public faClose = faClose;

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}
