const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  releaseYear: Number,
  genre: [{type:String}],
  director: [{type:String}],
  language: String,
}, {
  timestamps: true 
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;