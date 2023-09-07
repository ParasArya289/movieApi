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

const getAMovieByTitle =async(title)=>{
  try{
    const movie = await Movie.findOne({title})
    if(movie){
      return movie;
    }else{
      throw new Error("Requested movie not found")
    }
  }catch(error){
    throw error;
  }
}

module.exports = {getAllMovies,createMovie,getAMovieByTitle};