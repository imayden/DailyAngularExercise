import { Component, Input, Output, EventEmitter, Inject, PLATFORM_ID } from '@angular/core';
import { Book } from '../interfaces/book.interface';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  @Input() wishlist: Book[] = [];
  @Output() removeFromWishlist = new EventEmitter<Book>();

  onRemoveFromWishlist(book: Book) {
    this.removeFromWishlist.emit(book);
  }
}
