import {
  FILTER_SUPERHEROES, SET_CURRENT_HERO, FILTER_PUBLISHER,
  filterSuperhero, setCurrentHero, filterPublisher,
} from '../actions';

describe('create actions', () => {
  it('create action to filter superheroes', () => {
    const payload = [];
    const resultAction = {
      type: FILTER_SUPERHEROES,
      payload,
    };
    expect(filterSuperhero(payload)).toEqual(resultAction);
  });

  it('create action to set current hero', () => {
    const payload = [];
    const resultAction = {
      type: SET_CURRENT_HERO,
      payload,
    };
    expect(setCurrentHero(payload)).toEqual(resultAction);
  });

  it('create action to filter publisher', () => {
    const publisher = [];
    const resultAction = {
      type: FILTER_PUBLISHER,
      publisher,
    };
    expect(filterPublisher(publisher)).toEqual(resultAction);
  });
});
