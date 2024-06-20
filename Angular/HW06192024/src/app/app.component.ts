import { Component } from '@angular/core';
import { ColorService } from './color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private colorService: ColorService) {}

  onColorChange(color: string) {
    this.colorService.changeColor(color);
  }
}
