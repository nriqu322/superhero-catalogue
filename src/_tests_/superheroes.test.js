import superheroReducer from '../reducers/superheroes';
import { FILTER_SUPERHEROES, SET_CURRENT_HERO } from '../actions/index';

describe('superheroReducer', () => {
  it('initial state', () => {
    expect(superheroReducer(undefined, {})).toEqual({
      superheroes: [],
      currentHero: null,
    });
  });

  it('retrieve superheroes', () => {
    expect(superheroReducer(undefined, {
      type: FILTER_SUPERHEROES,
      payload: [{ heroFirst: 'superman' }, { heroSecond: 'batman' }],
    })).toEqual({
      superheroes: [{ heroFirst: 'superman' }, { heroSecond: 'batman' }],
      currentHero: null,
    });
  });

  it('set currentHero', () => {
    expect(superheroReducer(undefined, {
      type: SET_CURRENT_HERO,
      payload: [{ currentHero: 'superman' }],
    })).toEqual({
      superheroes: [],
      currentHero: [{ currentHero: 'superman' }],
    });
  });
});
