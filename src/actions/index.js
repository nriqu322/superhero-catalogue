const FILTER_SUPERHEROES = 'FILTER_SUPERHEROES';

const filterSuperhero = superheroes => ({
  type: FILTER_SUPERHEROES,
  superheroes,
});

export { FILTER_SUPERHEROES, filterSuperhero };
