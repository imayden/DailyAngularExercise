import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


// fetching data from the Google Books API
export class BookService {

  private apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private http: HttpClient) { } 

  searchBooks(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${query}`).pipe(
      map((data: any) => {
          return data.items.map((item: any) => {
            return {
              picture: item.volumeInfo.imageLinks?.thumbnail,
              name: item.volumeInfo.title,
              publisher: item.volumeInfo.publisher,
              publishDate: item.volumeInfo.publishedDate,
              description: item.volumeInfo.description
            }
          })
      })
    )
  }
}
