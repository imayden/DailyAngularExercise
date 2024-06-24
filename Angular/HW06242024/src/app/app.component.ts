import { Component, input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HW06242024';

  input: string = '';
  cityNames: string[] = [
    'San Jose',
    'San Francisco',
    'Los Angeles',
    'Santa Monica',
    'San Diego',
    'Santa Clara',
    'Sacramento',
    'Fresno',
    'Long Beach',
    'Oakland',
    'Bakersfield',
    'Anaheim',
    'Riverside',
    'Stockton',
    'Chula Vista'
  ];
}
