import { Component } from '@angular/core';
import { BookService } from '../service/book.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  books = [];


  // Search for books

  private searchTerms = new Subject<string>();

  constructor(private bookService: BookService) { }

  onSearch(event: any){
    const query = event.target.value;
    this.searchTerms.next(query);
  }

  ngOnInit(): void {
    this.searchTerms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((term: string) => this.bookService.searchBooks(term))
    ).subscribe();
  }

  // Add book to wishlist

  addToWishlist(book: any){
    
  }

}
