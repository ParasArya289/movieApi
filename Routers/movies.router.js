const express = require('express');
const moviesRouter = express.Router();

const {getAllMovies, createMovie } = require('../Queries/movies.queries')

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

moviesRouter.get("/",async(_,res)=>{
  try{
  const movies = await getAllMovies();
  res.status(200).json(movies)
  }catch(e){
    res.status(500).json({error:"Failed to get Movies"})
  }
})

moviesRouter.post("/",async(req,res)=>{
  try{
  const newMovie = req.body;
  const postedMovie = await createMovie(newMovie);
    
  res.status(201).json({message:"Movie Added",movie:postedMovie})
  }catch(e){
  res.status(500).json({error:"Failed adding a movie"})
  }
})

module.exports = moviesRouter;