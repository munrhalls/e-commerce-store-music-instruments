import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';

// COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { MobileMenuComponent } from './core/mobile-menu/mobile-menu.component';
import { StoreComponent } from './store/store.component';
import { FooterComponent } from './core/footer/footer.component';
import { StoreMenuComponent } from './store/store-menu/store-menu.component';
import { StoreDisplayComponent } from './store/store-display/store-display.component';
import { MobileSearchComponent } from './core/mobile-search/mobile-search.component';
import { AuthenticateComponent } from './core/authenticate/authenticate.component';

@NgModule({
  declarations: [
    MobileMenuComponent,
    AppComponent,
    HeaderComponent,
    StoreComponent,
    FooterComponent,
    StoreMenuComponent,
    StoreDisplayComponent,
    MobileSearchComponent,
    AuthenticateComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent],
})
export class AppModule {}
