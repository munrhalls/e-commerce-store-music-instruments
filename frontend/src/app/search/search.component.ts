import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  isOpen = false;
  isResults = false;

  handleSearch() {
    this.isOpen = true;
  }

  closeSearch() {
    this.isOpen = false;
    this.isResults = false;
  }
}
