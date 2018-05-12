const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todos} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// Remove all Todo
// Todo.remove({}).then((result) => {});


// findOneAndRemove
Todo.findOneAndRemove({}).then((result) => {});

// findByIdAndRemove
Todo.findByIdAndRemove('abc').then((result) => {});
