import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateComponent } from './core/authenticate/authenticate.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {
    path: 'authenticate',
    component: AuthenticateComponent,
    data: { animation: 'routeAnimations' },
  },
  { path: 'store', component: StoreComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
