"use strict"

const numberOfFilms = +prompt('How many movies you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const a = prompt('Last movie you watched', ''),
      b = prompt('Rate this movie from 10', ''),
      c = prompt('Last movie you watched', ''),
      d = prompt('Rate this movie from 10', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;
      
console.log(personalMovieDB);

