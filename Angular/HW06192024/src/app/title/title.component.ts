import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent implements OnInit {

  currentColor: string = 'black';

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.colorService.currentColor$.subscribe(color => this.currentColor = color);
  }


}
