const FILTER_SUPERHEROES = 'FILTER_SUPERHEROES';
const CURRENT_HERO = 'CURRENT_HERO';

const filterSuperhero = superheroes => ({
  type: FILTER_SUPERHEROES,
  superheroes,
});

const setCurrentHero = superhero => ({
  type: CURRENT_HERO,
  superhero,
});

export {
  FILTER_SUPERHEROES, CURRENT_HERO, filterSuperhero, setCurrentHero,
};
