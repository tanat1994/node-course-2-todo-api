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
  const db = client.db('Users');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to Insert ', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });



  // db.collection('Users').insertOne({
  //   name: 'Thanut Wiriyasathit',
  //   age: '23',
  //   location: 'KUKU'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to Insert ', err);
  //   }
  //   // console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });
  //
  client.close();
});
