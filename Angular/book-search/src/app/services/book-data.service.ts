import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';  
import { GoogleBooksResponseItem } from '../interfaces/google-books-response.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BookDataService {

  constructor(private http: HttpClient) {}

  searchBooks(term: string): Observable<Book[]> {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${term}`;
    return this.http.get<{ items: GoogleBooksResponseItem[] }>(apiUrl).pipe(
      map((response: { items: GoogleBooksResponseItem[] }) => 
        response.items.map((item: GoogleBooksResponseItem) => this.transformToBook(item))
      )
    );
  }

  private transformToBook(item: GoogleBooksResponseItem): Book {
    return {
      picture: item.volumeInfo.imageLinks?.thumbnail ?? '',
      name: item.volumeInfo.title ?? '',
      publisher: item.volumeInfo.publisher ?? '',
      publishDate: item.volumeInfo.publishedDate ?? '',
      description: item.volumeInfo.description ?? ''
    };
  }
}
