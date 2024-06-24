import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityNameFilter',
  pure: true
})
export class CityNameFilterPipe implements PipeTransform {

  transform(cityNames: string[], input: string): string[] {
    if (!cityNames || !input) {
      return cityNames;
    };

    input = input.toLowerCase();

    const getAbbrev = (name: string): string => {
      return name.split(' ')
        .map(word => word.charAt(0))
        .join('');
    };

    const lowerCaseCityNames: string[] = cityNames.map(cityName => cityName.toLowerCase());
    const abbrevCityNames: string[] = cityNames.map(cityName => getAbbrev(cityName.toLowerCase()));

    const matchedAbbrevCities: string[] = [];
    const matchedNameCities: string[] = [];

    cityNames.forEach((cityName, index) => {
      const abbrevCityName = abbrevCityNames[index];
      const lowerCaseCityName = lowerCaseCityNames[index];

      if (abbrevCityName.includes(input)) {
        matchedAbbrevCities.push(cityName);
      } else if (lowerCaseCityName.includes(input)) {
        matchedNameCities.push(cityName);
      }
    });

    const result: string[] = [...matchedAbbrevCities, ...matchedNameCities];

    if (result.length > 0) {
      return result;
    } else {
      return ['Nothing Found...'];
    };

  }

}
