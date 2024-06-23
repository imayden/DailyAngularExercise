import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {

  @Input() name!: string;
  @Input() content!: string;
  @Input() rate!: number;

  getStarStyle(starNumber: number) {
    if (starNumber <= this.rate) {
      return { opacity: 1 };
    } else if (starNumber - 1 < this.rate && this.rate < starNumber) {
      return { opacity: 1 };
    } else {
      return { opacity: 0.2 };
    }
  }

}
