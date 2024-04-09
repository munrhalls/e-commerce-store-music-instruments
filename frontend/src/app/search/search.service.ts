import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ServerResponse {
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchProducts(term: string): Observable<ServerResponse> {
    // const params = new HttpParams().set('name', term);
    return this.http.get<ServerResponse>('/api/hello');
  }
}
