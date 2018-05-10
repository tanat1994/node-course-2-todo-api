const express = require('express');
var app = express();
var bodyParser = require('body-parser'); // Let us send JSON to server

var {mongoose} = require('./db/mongoose.js');

var {Todos} = require('./models/todo.js');
var {User} = require('./models/user.js');

// Middleware
app.use(bodyParser.json());

// @dev path create todo
app.post('/todos', (req, res) => {
  var todo = new Todos({
    text: req.body.text
  });

  // console.log(req.body);

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(404).send(err);
  });
});


app.listen(3000, () => {
  console.log('Server is up on Port: 3000');
});


module.exports = {
  app: app
};
