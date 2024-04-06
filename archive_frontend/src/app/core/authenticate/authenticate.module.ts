import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { LoginComponent } from './login/login.component'
import { AuthenticateComponent } from './authenticate.component'
import { RegisterComponent } from './register/register.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

// import { HttpClientModule } from '@angular/common/http'
// import { CommonModule } from '@angular/common'
// import { RouterModule } from '@angular/router'
// import { AuthenticateRoutingModule } from './authenticate-routing.module'

@NgModule({
  declarations: [
    AuthenticateComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false
        // providers: [
        //   {
        //     id: GoogleLoginProvider.PROVIDER_ID,
        //     provider: new GoogleLoginProvider('Google-OAuth-Client-Id')
        //   },
        //   {
        //     id: FacebookLoginProvider.PROVIDER_ID,
        //     provider: new FacebookLoginProvider('Facebook-App-Id')
        //   }
        // ]
      }
    }
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule
    // HttpClientModule,
    // SocialLoginModule,
    // FormsModule,
    // CommonModule,
    // AuthenticateRoutingModule,
    // RouterModule,
  ]
})
export class AuthenticateModule {}
