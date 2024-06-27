import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../service/wishlist.service';

interface Book {
  picture: string;
  name: string;
  publisher: string;
  publishDate: string;
  description: string;
}

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlist: Book[] = [];

  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.wishlist = this.wishlistService.getWishlist();
  }

  removeFromWishlist(book: Book): void {
    this.wishlistService.removeFromWishlist(book);
    this.wishlist = this.wishlistService.getWishlist();
  }
}

