const Movie = require("../Modles/movies")

const getAllMovies = async() => {
  try{
    const allMovies = await Movie.find();
    console.log(allMovies);
    return allMovies;
  }catch(e){
    throw e
  }
}

const createMovie = async(movieData) => {
  try{
    const newMovie = new Movie(movieData)
    const savedMovie = newMovie.save();
    console.log("Movie Saved",savedMovie)
    return savedMovie;
  }catch(e){
    console.error("Failed to create movie",e)
    throw e
  }
}

module.exports = {getAllMovies,createMovie};