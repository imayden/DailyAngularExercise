import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-average-rating',
  templateUrl: './average-rating.component.html',
  styleUrl: './average-rating.component.scss'
})
export class AverageRatingComponent implements OnInit {

  @Input() ratings: { rate: number }[] = [];
  averageRating!: number;

  ngOnInit(): void {
    this.calculateAverageRating();
  }

  calculateAverageRating() {
    const total = this.ratings.reduce((sum, rating) => sum + rating.rate, 0);
    this.averageRating = total / this.ratings.length;
  }

  getStarStyle(starNumber: number) {
    if (starNumber <= this.averageRating) {
      return { opacity: 1 };
    } else if (starNumber - 1 < this.averageRating && this.averageRating < starNumber) {
      return { opacity: 1 };
    } else {
      return { opacity: 0.2 };
    }
  }

}
