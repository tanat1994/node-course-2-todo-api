// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Users', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  // const db = client.db('TodoApp');
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5af275f4a1282815c1ce60bb')
  // }, {
  //   $set: {
  //     text: 'test update',
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // }, (error) => {
  //   console.log('Unable to update', error);
  // });


  const db = client.db('Users');
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5af179f181822e7659c034b4')
  }, {
    $set: {
      name: 'ThanutWiri'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  }, (error) => {
    console.log('Unable to update', error);
  });

  client.close();
});
