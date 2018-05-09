// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID(); //Create new Instance of _id of MongoDB
console.log(obj); // Print it out

// @dev example of ES6 destructuring
// var user = {name: 'Thanut', age: 23};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/Users', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');
  // const db = client.db('TodoApp');

  // @dev find collection
  // db.collection('Todos').find({
  //   _id: new ObjectID('5af1791ef280c47597b20a45')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // @dev count collection
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Counts : ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // @note the same as upper source code but using callback
  // db.collection('Todos').find().count((err, count) => {
  //   if (err) {
  //     return console.log('Unable to fetch Todos', err);
  //   }
  //   console.log(`Counts : ${count}`);
  // });

  const db = client.db('Users');
  db.collection('Users').find({name: 'KoKA'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Users', err);
  });

  client.close();
});
