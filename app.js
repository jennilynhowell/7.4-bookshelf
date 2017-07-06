const mongoose = require('mongoose');
const Books = require('./models/books');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb//localhost:27017/booksdb');
