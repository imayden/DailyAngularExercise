import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Book } from '../interfaces/book.interface';
import { BookDataService } from '../services/book-data.service';

@Component({
  selector: 'app-show-wishlist',
  templateUrl: './show-wishlist.component.html',
  styleUrl: './show-wishlist.component.scss'
})
export class ShowWishlistComponent {
  books: Book[] = [];
  wishlist: Book[] = [];

  constructor(
    private bookDataService: BookDataService, 
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const storedWishlist = localStorage.getItem('wishlist');
      if (storedWishlist) {
        this.wishlist = JSON.parse(storedWishlist);
      }
    }
  }

  onSearch(term: string) {
    this.bookDataService.searchBooks(term).subscribe(books => {
      this.books = books;
    });
  }

  addToWishlist(book: Book) {
    if (!this.wishlist.includes(book)) {
      this.wishlist.push(book);
      this.saveWishlist();
    }
  }

  removeFromWishlist(book: Book) {
    this.wishlist = this.wishlist.filter(b => b !== book);
    this.saveWishlist();
  }

  private saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
  }

}
