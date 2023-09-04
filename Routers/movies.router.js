const express = require('express');
const moviesRouter = express.Router();

const { createMovie } = require('../Queries/movies.queries')

const {postMovie} = require("../Controllers/movie.controller");
const moviesData = [
  {
    "title": "Movie 1",
    "releaseYear": 2022,
    "genre": ["Action", "Adventure"],
    "director": "Director 1",
    "language": "English"
  },
  {
    "title": "Movie 2",
    "releaseYear": 2019,
    "genre": ["Drama", "Romance"],
    "director": "Director 2",
    "language": "Spanish"
  },
  {
    "title": "Movie 3",
    "releaseYear": 2020,
    "genre": ["Comedy"],
    "director": "Director 3",
    "language": "French"
  },
  {
    "title": "Movie 4",
    "releaseYear": 2021,
    "genre": ["Sci-fi", "Fantasy"],
    "director": "Director 4",
    "language": "German"
  },
  {
    "title": "Movie 5",
    "releaseYear": 2018,
    "genre": ["Thriller", "Mystery"],
    "director": "Director 5",
    "language": "Japanese"
  }
]

moviesRouter.get("/",(_,res)=>{
  res.json(moviesData)
})

moviesRouter.post("/",postMovie)

module.exports = moviesRouter;