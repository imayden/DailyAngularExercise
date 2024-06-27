import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../interfaces/book.interface';

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
