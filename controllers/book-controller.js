const Book = require('../models/books');

module.exports = {
  home: function(req, res){
    Book.find().then(results =>{
      res.render('index', {model: results});
    });
  },

  addBook: function(req, res){
    let title = req.body.title
      , author = req.body.author
      , yearPublished = req.body.year
      , completed = req.body.completed;
    let addBook = new Book(
      {title: title, author: author, yearPublished: yearPublished, completed: completed}
    );
    addBook.save().then(function(){
      res.redirect('/');
    });
  },

  viewBook: function(req, res){
    let book = req.params._id;
    Book.findOne({_id: book}).then(result =>{
      res.render('book', result);
    });
  },

  updateBook: function(req, res){
    let characters = req.body.characters
      , plot = req.body.plot
      , review = req.body.review
      , shopUrl = req.body.url
      , book = req.body.book
      , completed = req.body.completed;

    Book.findOne({_id: book}).then(result =>{
      result.completed = completed;
      result.summary.characters = characters;
      result.summary.plot = plot;
      result.summary.review = review;
      result.summary.shopUrl = shopUrl;

      result.save().then(function(){
        res.redirect('/book/' + book);
      });
    })
  },

  deleteBook: function(req, res){
    let book = req.body.book;
    Book.findOneAndRemove({_id: book}).then(function(){
        res.redirect('/');
      });
  }

}
