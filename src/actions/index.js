const FILTER_SUPERHERO = 'FILTE_SUPERHERO';

const filterSuperhero = superhero => ({
  type: FILTER_SUPERHERO,
  superhero,
});

export default filterSuperhero;
