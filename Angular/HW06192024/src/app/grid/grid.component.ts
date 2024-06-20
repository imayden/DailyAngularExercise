import { Component } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  tiles = [
    { title: 'Blue Tile', 
      content: 'BLUE Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel orci. Lacus vel facilisis volutpat est velit egestas. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Bibendum at varius vel pharetra vel turpis. Est ante in nibh mauris. Dictum varius duis at consectetur lorem. Sed libero enim sed faucibus turpis in. Amet est placerat in egestas erat imperdiet sed euismod. Vitae proin sagittis nisl rhoncus. Nibh praesent tristique magna sit amet purus gravida. Volutpat lacus laoreet non curabitur gravida arcu. Dolor sit amet consectetur adipiscing elit.', 
      color: 'blue' },
    { title: 'Black Tile', 
      content: 'BLACK Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel orci. Lacus vel facilisis volutpat est velit egestas. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Bibendum at varius vel pharetra vel turpis. Est ante in nibh mauris. Dictum varius duis at consectetur lorem. Sed libero enim sed faucibus turpis in. Amet est placerat in egestas erat imperdiet sed euismod. Vitae proin sagittis nisl rhoncus. Nibh praesent tristique magna sit amet purus gravida. Volutpat lacus laoreet non curabitur gravida arcu. Dolor sit amet consectetur adipiscing elit.', 
      color: 'black' },
    { title: 'Red Tile', 
      content: 'RED Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel orci. Lacus vel facilisis volutpat est velit egestas. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Bibendum at varius vel pharetra vel turpis. Est ante in nibh mauris. Dictum varius duis at consectetur lorem. Sed libero enim sed faucibus turpis in. Amet est placerat in egestas erat imperdiet sed euismod. Vitae proin sagittis nisl rhoncus. Nibh praesent tristique magna sit amet purus gravida. Volutpat lacus laoreet non curabitur gravida arcu. Dolor sit amet consectetur adipiscing elit.', 
      color: 'red' },
    { title: 'Green Tile', 
      content: 'GREEN Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel orci. Lacus vel facilisis volutpat est velit egestas. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Bibendum at varius vel pharetra vel turpis. Est ante in nibh mauris. Dictum varius duis at consectetur lorem. Sed libero enim sed faucibus turpis in. Amet est placerat in egestas erat imperdiet sed euismod. Vitae proin sagittis nisl rhoncus. Nibh praesent tristique magna sit amet purus gravida. Volutpat lacus laoreet non curabitur gravida arcu. Dolor sit amet consectetur adipiscing elit.', 
      color: 'green' }
  ];

  activeTileColor: string = ''; 

  constructor(private colorService: ColorService) {}

  handleColorChange(color: string) {
    this.activeTileColor = color; 
    this.colorService.changeColor(color); 
  }
}
