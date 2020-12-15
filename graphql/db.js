export let movies = [
  {
    id: 0,
    name: 'Avengers',
    score: 6,
  },
  {
    id: 1,
    name: 'Logan',
    score: 8,
  },
  {
    id: 2,
    name: 'Friends',
    score: 9,
  },
  {
    id: 3,
    name: 'Interstella',
    score: 10,
  },
  {
    id: 4,
    name: 'Darknight',
    score: 7,
  },
  {
    id: 5,
    name: 'Grinch',
    score: 4,
  },
  {
    id: 6,
    name: 'Once',
    score: 9,
  },
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id);
  return filteredPeople[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMoive;
};
