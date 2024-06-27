import { Component } from '@angular/core';
import { BookDataService } from '../services/book-data.service';
import { Book } from '../interfaces/book.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  books: Book[] = [];
  wishlist: Book[] = [];

  constructor(private bookDataService: BookDataService) {}

  onSearch(term: string) {
    this.bookDataService.searchBooks(term).subscribe(books => {
      this.books = books;
    });
  }

  addToWishlist(book: Book) {
    if (!this.wishlist.includes(book)) {
      this.wishlist.push(book);
    }
  }

  removeFromWishlist(book: Book) {
    this.wishlist = this.wishlist.filter(b => b !== book);
  }
}
