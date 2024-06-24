import { CityNameFilterPipe } from './city-name-filter.pipe';

describe('CityNameFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new CityNameFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
