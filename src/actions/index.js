const FILTER_SUPERHEROES = 'FILTER_SUPERHEROES';
const SET_CURRENT_HERO = 'CURRENT_HERO';
const FILTER_PUBLISHER = 'FILTER_PUBLISHER';

const filterSuperhero = superheroes => ({
  type: FILTER_SUPERHEROES,
  payload: superheroes,
});

const setCurrentHero = superhero => ({
  type: SET_CURRENT_HERO,
  payload: superhero,
});

const filterPublisher = publisher => ({
  type: FILTER_PUBLISHER,
  publisher,
});

export {
  FILTER_SUPERHEROES, SET_CURRENT_HERO, FILTER_PUBLISHER,
  filterSuperhero, setCurrentHero, filterPublisher,
};
