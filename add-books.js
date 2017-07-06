const mongoose = require('mongoose');
const Book = require('./models/books');

mongoose.connect('mongodb://localhost:27017/books');

let book1 = new Book(
  {title: 'Seabiscuit', author: 'Laura Hillenbrand', yearPublished: 2002, completed: true}
);
//https://www.amazon.com/Seabiscuit-American-Legend-Ballantine-Readers/dp/0449005615/ref=sr_1_3?ie=UTF8&qid=1499364789&sr=8-3&keywords=seabiscuit

let book2 = new Book(
  {title: 'Isaac\'s Storm', author: 'Erik Larson', yearPublished: 2000, completed: true}
);
//https://www.amazon.com/Isaacs-Storm-Deadliest-Hurricane-History/dp/0375708278/ref=sr_1_1?s=books&ie=UTF8&qid=1499364873&sr=1-1&keywords=isaac%27s+storm

let book3 = new Book(
  {title: 'The Storyteller', author: 'Jodi Picoult', yearPublished: 2013, completed: true}
);
//https://www.amazon.com/Storyteller-Jodi-Picoult/dp/1439102775/ref=sr_1_3?s=books&ie=UTF8&qid=1499364972&sr=1-3&keywords=jodi+picoult

let book4 = new Book(
  {title: 'The Secret Life of Bees', author: 'Sue Monk Kidd', yearPublished: 2003, completed: true}
);
//https://www.amazon.com/Secret-Life-Bees-Monk-Kidd/dp/0142001740/ref=sr_1_1?s=books&ie=UTF8&qid=1499365036&sr=1-1&keywords=secret+life+of+bees

let book5 = new Book(
  {title: 'Everyone Brave is Forgiven', author: 'Chris Cleave', yearPublished: 2016, completed: false}
);
//https://www.amazon.com/Everyone-Brave-Forgiven-Chris-Cleave/dp/1501124382/ref=sr_1_1?s=books&ie=UTF8&qid=1499365117&sr=1-1&keywords=everyone+brave+is+forgiven

let book6 = new Book(
  {title: 'Little Bee', author: 'Chris Cleave', yearPublished: 2009, completed: true}
);
//https://www.amazon.com/Little-Bee-Novel-Chris-Cleave/dp/1416589635/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=

book1.save();
book2.save();
book3.save();
book4.save();
book5.save();
book6.save();

// var recipe = new Recipe({name: "Pancakes"});
// recipe.ingredients.push({ingredient: 'sugar', measure: " Tbsp"});
// console.log(recipe.toObject());
