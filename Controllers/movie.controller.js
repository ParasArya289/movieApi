const { createMovie } = require('../Queries/movies.queries')
const postMovie = async()=>{
  async(req,res)=>{
  try{
  const newMovie = req.body;
  const postedMovie = await createMovie(newMovie);
    
  res.status(201).json({message:"Movie Added",movie:postedMovie})
  }catch(e){
  res.status(500).json({message:"Movie Added",movie:postedMovie})
  }
}
}

module.exports = {postMovie}