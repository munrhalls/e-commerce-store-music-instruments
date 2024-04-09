import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from './search.service';
import { Subscription } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

interface Product {
  name: string;
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
@Injectable()
export class SearchComponent {
  constructor(private searchService: SearchService) {}
  isOpen = false;
  isResults = false;
  searchTerm = '';
  searchSubscription: Subscription | undefined;

  handleSearch() {
    this.isOpen = true;
    console.log(this.searchTerm);
    this.searchSubscription = this.searchService
      .searchProducts(this.searchTerm)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.isResults = true;
        },
        error: (error) => {
          console.error(error);
          this.isResults = true;
        },
      });
  }

  closeSearch() {
    this.searchTerm = '';
    this.isOpen = false;
    this.isResults = false;
  }
}
