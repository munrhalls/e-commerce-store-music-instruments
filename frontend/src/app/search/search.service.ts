import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Product {
  name: string;
}

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) {}

  searchProducts(term: string): Observable<Product> {
    const params = new HttpParams().set('name', term);
    return this.http.get<Product>('https://api.example.com/data', { params });
  }
}
