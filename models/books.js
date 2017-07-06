const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  yearPublished: {type: Date, required: true},
  completed: {type: Boolean},
  summary: {
    plot: {type: String},
    characters: [String],
    review: [String],
    shopUrl: {type: String} //amazon URL
  }
});

const Books = mongoose.model('Books', bookSchema);

module.exports = Books;
