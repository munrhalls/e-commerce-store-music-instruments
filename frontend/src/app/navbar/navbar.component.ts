import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgOptimizedImage, NavMenuComponent, SearchComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
