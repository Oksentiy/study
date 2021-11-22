"use strict";

const numberOfFilm = +prompt("Скільки  кінострічок ви уже переглянули?", "");

const personalMovieDB = {
  count: numberOfFilm,
  movies: {},
  // actors: {},
  // genres: [],
  privat: false,
};

const a = prompt("Який фільм дивилися в одстаннє?", ""),
  b = prompt("як оцінюєте його?"),
  c = prompt("Який фільм дивилися в одстаннє?", ""),
  d = prompt("як оцінюєте його?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
