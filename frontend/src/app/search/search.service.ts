import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface GQLSearchReq<TVariables> {
  query: string;
  variables: TVariables;
}
interface SearchVariables {
  searchTerm: string;
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchProducts(
    searchTerm: string,
  ): Observable<GQLSearchReq<SearchVariables>> {
    const requestBody = {
      query: `query($searchTerm: String!) {
        products(name: $searchTerm) {
            name
            price
          }
        }
      }`,
      variables: {
        searchTerm,
      },
    };
    return this.http.post<GQLSearchReq<SearchVariables>>(
      '/api/graphql',
      requestBody,
    );
  }
}
