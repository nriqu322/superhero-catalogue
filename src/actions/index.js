const FILTER_SUPERHEROES = 'FILTER_SUPERHEROES';
const SET_CURRENT_HERO = 'CURRENT_HERO';

const filterSuperhero = superheroes => ({
  type: FILTER_SUPERHEROES,
  payload: superheroes,
});

const setCurrentHero = superhero => ({
  type: SET_CURRENT_HERO,
  payload: superhero,
});

export {
  FILTER_SUPERHEROES, SET_CURRENT_HERO, filterSuperhero, setCurrentHero,
};
