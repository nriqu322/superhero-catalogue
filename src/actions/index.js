const FILTER_SUPERHERO = 'FILTER_SUPERHERO';

const filterSuperhero = superheroes => ({
  type: FILTER_SUPERHERO,
  superheroes,
});

export { FILTER_SUPERHERO, filterSuperhero };
