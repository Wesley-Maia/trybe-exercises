import { SELECT_MOVIE } from "./actionTypes"

export const actionSelectMovie = (movie,category) => ({
  type:SELECT_MOVIE,
  movie,
  category
})


