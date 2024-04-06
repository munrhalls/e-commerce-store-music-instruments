import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { type Routes, RouterModule, PreloadAllModules } from '@angular/router'
import { StoreComponent } from './store/store.component'

const routes: Routes = [
  {
    path: 'authenticate',
    loadChildren: () =>
      import('./core/authenticate/authenticate.module').then(
        (m) => m.AuthenticateModule
      )
  },
  { path: 'store', component: StoreComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      enableTracing: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
