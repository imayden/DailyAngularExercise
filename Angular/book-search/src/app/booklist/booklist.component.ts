import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookDataService } from '../services/book-data.service';
import { Book } from '../interfaces/book.interface';  

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.scss'
})
export class BooklistComponent {
  @Input() books: Book[] = [];
  @Output() addToWishlist = new EventEmitter<Book>();

  onAddToWishlist(book: Book) {
    this.addToWishlist.emit(book);
  }
}