const FILTER_SUPERHERO = 'FILTER_SUPERHERO';

const filterSuperhero = name => ({
  type: FILTER_SUPERHERO,
  name,
});

export { FILTER_SUPERHERO, filterSuperhero };
