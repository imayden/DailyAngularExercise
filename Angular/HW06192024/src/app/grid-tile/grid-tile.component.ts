import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid-tile',
  templateUrl: './grid-tile.component.html',
  styleUrls: ['./grid-tile.component.scss']
})
export class GridTileComponent {
  @Input() title!: string; 
  @Input() content!: string; 
  @Input() color!: string; 
  @Input() activeTileColor!: string; 
  @Output() colorChange = new EventEmitter<string>(); 

  get isActive(): boolean {
    return this.activeTileColor === this.color;
  }


  changeColor() {
    this.colorChange.emit(this.color);
  }
}
