const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todos} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

var id = '5af40a87ecb2386cad3beaaf';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// Todos.find({
//   _id: id
// }).then((todos) => {
//   if (!todos) {
//     return console.log('Unable to find the collection');
//   }
//   console.log('Todos ', todos);
// });
//
// Todos.findOne({
//   _id: id
// }).then((todo) => {
//   if (!todo) {
//     return console.log('Unable to find the collection');
//   }
//   console.log('Todo', todo);
// });
//
// Todos.findById({
//   _id: id
// }).then((todoById) => {
//   console.log('Todo Find by Id', todoById);
// })


var userId = '5af3c9c43944972b66bf872c';
// TODO Challenge
User.findById('5af3c9c43944972b66bf872c').then((user) => {
  if (!user) {
    return console.log('User not found');
  }

  console.log(user.email);
}, (e) => {
  console.log(e);
});
