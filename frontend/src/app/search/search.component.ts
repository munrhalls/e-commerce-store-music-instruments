import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  isOpen = false;
  isResults = false;

  handleSearch() {
    this.isOpen = true;
    this.http.get('https://api.example.com/data').subscribe(
      (data) => {
        // Handle the response data
        console.log(data);
        this.isResults = true;
      },
      (error) => {
        // Handle errors
        console.error(error);
        this.isResults = true;
      },
    );
  }

  closeSearch() {
    this.isOpen = false;
    this.isResults = false;
  }
}
