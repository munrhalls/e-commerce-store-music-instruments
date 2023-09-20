import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthenticateComponent } from './core/authenticate/authenticate.component';
import { LoginComponent } from './core/authenticate/login/login.component';
import { RegisterComponent } from './core/authenticate/register/register.component';
import { ForgotPasswordComponent } from './core/authenticate/forgot-password/forgot-password.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticateComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
    ],
  },
  { path: 'store', component: StoreComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
