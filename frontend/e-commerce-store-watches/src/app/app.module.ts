import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { StoreComponent } from './store/store.component';
import { FooterComponent } from './core/footer/footer.component';
import { StoreMenuComponent } from './store/store-menu/store-menu.component';
import { StoreDisplayComponent } from './store/store-display/store-display.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MobileMenuComponent } from './core/mobile-menu/mobile-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoreComponent,
    FooterComponent,
    StoreMenuComponent,
    StoreDisplayComponent,
    MobileMenuComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
