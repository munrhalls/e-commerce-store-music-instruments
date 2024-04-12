import { Component, Injectable, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from './search.service';
import { Subscription } from 'rxjs';

interface Product {
  name: string;
  price: string;
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
@Injectable()
export class SearchComponent implements OnDestroy {
  constructor(private searchService: SearchService) {}
  isOpen = false;
  isResults = false;
  searchTerm = '';
  searchSubscription: Subscription | undefined;
  products: Product[] = [];

  ngOnDestroy() {
    this.searchSubscription?.unsubscribe();
  }

  handleSearch() {
    this.isOpen = true;

    this.searchSubscription = this.searchService
      .searchProducts(this.searchTerm)
      .subscribe({
        next: (response: any) => {
          this.products = response.data.products;
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
