import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Book {
  picture: string;
  name: string;
  publisher: string;
  publishDate: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private http: HttpClient) { }

  searchBooks(query: string): Observable<Book[]> {
    if (!query.trim()) {
      return new Observable<Book[]>((observer) => {
        observer.next([]);
        observer.complete();
      });
    }

    return this.http.get(`${this.apiUrl}${query}`).pipe(
      map((data: any) => {
        return data.items.map((item: any) => {
          return {
            picture: item.volumeInfo.imageLinks?.thumbnail || '',
            name: item.volumeInfo.title || 'No title available',
            publisher: item.volumeInfo.publisher || 'Unknown publisher',
            publishDate: item.volumeInfo.publishedDate || 'No date available',
            description: item.volumeInfo.description || 'No description available'
          } as Book;
        });
      })
    );
  }
}
