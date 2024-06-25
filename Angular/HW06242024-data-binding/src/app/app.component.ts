import { Component } from '@angular/core';
import { machine } from 'os';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HW06242024-data-binding';

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


  filteredCityNames: string[] = [];

  constructor() {
    this.filterCities();
  }

  filterCities() {

    this.cityNames = this.cityNames.sort();
    
    const input = this.input.toLowerCase();

    const getAbbrev = (name: string): string => {
      return name.split(' ')
        .map(word => word.charAt(0))
        .join('');
    };

    const lowerCaseCityNames: string[] = this.cityNames.map(cityName => cityName.toLowerCase());
    const abbrevCityNames: string[] = this.cityNames.map(cityName => getAbbrev(cityName.toLowerCase()));

    const matchedAbbrevCities: string[] = [];
    const matchedNameCities: string[] = [];

    this.cityNames.forEach((cityName, index) => {
      const abbrevCityName = abbrevCityNames[index];
      const lowerCaseCityName = lowerCaseCityNames[index];

      if (abbrevCityName.includes(input)) {
        matchedAbbrevCities.push(cityName);
      } else if (lowerCaseCityName.includes(input)) {
        matchedNameCities.push(cityName);
      }
    });

    const matchedCities : string[] = matchedNameCities.slice().sort();

    const result: string[] = [...matchedAbbrevCities, ...matchedCities];

    if (result.length > 0) {
      this.filteredCityNames = result;
    } else {
      this.filteredCityNames = ['Nothing Found...'];
    };
  }
}
