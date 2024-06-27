import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { WishlistService } from '../service/wishlist.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

interface Book {
  picture: string;
  name: string;
  publisher: string;
  publishDate: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  wishlist: Book[] = [];
  private searchTerms = new Subject<string>();

  constructor(private bookService: BookService, private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.wishlist = this.wishlistService.getWishlist();
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.bookService.searchBooks(term))
    ).subscribe(books => this.books = books);
  }

  onSearch(event: any): void {
    const query = event.target.value.trim();
    if (query) {
      this.searchTerms.next(query);
    } else {
      this.books = [];
    }
  }

  addToWishlist(book: Book): void {
    this.wishlistService.addToWishlist(book);
    this.wishlist = this.wishlistService.getWishlist();
  }

  removeFromWishlist(book: Book): void {
    this.wishlistService.removeFromWishlist(book);
    this.wishlist = this.wishlistService.getWishlist();
  }
}
