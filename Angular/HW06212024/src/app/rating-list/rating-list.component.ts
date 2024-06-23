import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrl: './rating-list.component.scss'
})
export class RatingListComponent implements OnInit {

  @Input() ratings: { name: string, content: string, rate: number }[] = [];

  @Output() ratingsChange = new EventEmitter<{ name: string, content: string, rate: number }[]>();

  ngOnInit(): void {
    this.ratingsChange.emit(this.ratings); 
  }  
}
