import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoreComponent } from './store/store.component';
import { FooterComponent } from './footer/footer.component';
import { StoreMenuComponent } from './store/store-menu/store-menu.component';
import { StoreDisplayComponent } from './store/store-display/store-display.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoreComponent,
    FooterComponent,
    StoreMenuComponent,
    StoreDisplayComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
