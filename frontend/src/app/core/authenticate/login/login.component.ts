// import { take, catchError } from 'rxjs/operators'
import { throwError } from 'rxjs'
import { type HttpClient } from '@angular/common/http'
import { Component, type OnInit } from '@angular/core'
import {
  FormGroup,
  FormControl,
  Validators,
  type ValidationErrors,
  type AbstractControl
} from '@angular/forms'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
// import {
//   SocialAuthService,
//   GoogleLoginProvider,
//   FacebookLoginProvider
// } from '@abacritt/angularx-social-login'
// import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // constructor(private readonly http: HttpClient) {}
  private handleError(error: any): void {
    console.error('Authentication error:', error)
    throwError(() => new Error('Authentication failed; please try again.'))
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [
      (control: AbstractControl) => Validators.required(control),
      (control: AbstractControl) => Validators.email(control)
    ] as Array<(control: AbstractControl) => ValidationErrors | null>),
    password: new FormControl(null, [
      (control: AbstractControl) => Validators.required(control),
      (control: AbstractControl) => Validators.minLength(8)(control)
    ] as Array<(control: AbstractControl) => ValidationErrors | null>)
  })

  faGoogle = faGoogle

  signInWithGoogle(): void {
    window.location.href = window.location.origin + 'auth/google'
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
    }
  }

  handleCredentialResponse(response: any): void {
    console.log(response)
    // Send token to backend
  }

  ngOnInit(): void {}
}
