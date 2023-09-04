const Movie = require("../Modles/movies")

// const getAllMovies = async() => {
//   const createMovie
// }

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

module.exports = {createMovie};