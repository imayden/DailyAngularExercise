import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

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
export class WishlistService {
  private wishlist: Book[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadWishlist();
    }
  }

  getWishlist(): Book[] {
    return this.wishlist;
  }

  addToWishlist(book: Book): void {
    if (!this.wishlist.some(item => item.name === book.name)) {
      this.wishlist.push(book);
      this.saveWishlist();
    }
  }

  removeFromWishlist(book: Book): void {
    this.wishlist = this.wishlist.filter(item => item.name !== book.name);
    this.saveWishlist();
  }

  private loadWishlist(): void {
    if (isPlatformBrowser(this.platformId)) {
      const storedWishlist = localStorage.getItem('wishlist');
      if (storedWishlist) {
        this.wishlist = JSON.parse(storedWishlist);
      }
    }
  }

  private saveWishlist(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    }
  }
}
