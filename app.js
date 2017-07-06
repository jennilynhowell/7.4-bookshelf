const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/books');
const mustacheExpress = require('mustache-express');
const controller = require('./controllers/book-controller');
const bodyParser = require('body-parser');

const app = express();
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');
app.use('/static', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/books');

app.get('/', controller.home);
app.post('/add', controller.addBook);
app.get('/book/:_id', controller.viewBook);
app.post('/update/:_id', controller.updateBook);
app.post('/delete/:_id', controller.deleteBook);

app.listen(3000);
