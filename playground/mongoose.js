var {mongoose} = require('./db/mongoose.js'); //same like
                                              //var mongoose = require('./db/mongoose.js').mongoose;
                                              //Because mongoose in mongoose.js is a property not function

// TODO Todos
// Mongoose Schema
  // var Todos = mongoose.model('todos', {
  //   text: {
  //     type: String,
  //     required: true,
  //     minlength: 1,
  //     trim: true
  //   },
  //   completed: {
  //     type: Boolean
  //     default: false
  //   },
  //   completedAt: {
  //     type: Number,
  //     default: null
  //   }
  // });

// var newTodos = new Todos({
//   text: 'Eat dinner',
//   completed: false,
//   completedAt: 150
// });

// newTodos.save().then((docs) => {
//   console.log(docs);
// }, (err) => {
//   console.log('Unable to save a collection', err);
// });




// TODO User
// email - required - trim - type string - min 1
var User = mongoose.model('users', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

// @dev test new User with callback - can save but no returning back
// var newUser = new User({
//   email: ' test@gmail.com '
// }).save((docs) => {
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (error) => {
//   console.log(error);
// });

// @dev test new User with promise
var newUser = new User({
  email: ' promise@gmail.com '
});
newUser.save().then((docs) => {
  console.log(docs);
}, (err) => {
  console.log(err);
});
