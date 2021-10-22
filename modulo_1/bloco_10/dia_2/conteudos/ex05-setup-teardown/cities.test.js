const {
  resetCities,
  getCities,
  removeCity,
  retrieveCitiesFromCache,
  requestCities,
  isCity
} = require('./cities');

describe('Retrieving cities from cache', () => {
  beforeEach(() => {
    retrieveCitiesFromCache();
  });
  
  afterEach(() => {
    resetCities();
  });
  
  it('Should have only 1 city after remove Belo Horizonte', () => {
    removeCity('Belo Horizonte');
    //console.log(retrieveCitiesFromCache());
    expect(getCities().length).toBe(1);
  });
  
  it('Should have 2 cities after retrieving from cache', () => {
    expect(getCities().length).toBe(2);
  });
});

describe('Requesting cities from api', () => {
  beforeEach(() => {
    return requestCities();
  });

  afterEach(() => {
    resetCities();
  });

  it('Should have 8 cities after requesting from api', () => {
    expect(getCities().length).toBe(8);
  });

  it('Should have the city of Recife', () => {
    expect(isCity('Recife')).toBeTruthy();
  });
});
