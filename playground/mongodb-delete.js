// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Users', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  // TODO TodoApp
  // const db = client.db('TodoApp');
  // @dev Delete Many
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete', err);
  // });

  // @dev Delete one
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete', err);
  // });


  // @dev Find one and delete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // }, (error) => {});

  // TODO Users
  const db = client.db('Users');
  //@dev deleteMany Users `Thanut Wiriyasathit`
  db.collection('Users').deleteMany({name: 'Thanut Wiriyasathit'}).then((result) => {
    console.log(result);
  }, (error) => {
    console.log('Unable to delete', error);
  });

  // @dev findOneAndDelete Users _id = ObjectId("5af2735a84dbcea24dcc9a8b")
  // db.collection('Users').findOneAndDelete({
  //   _id : new ObjectID('5af2735a84dbcea24dcc9a8b')
  // }).then((result) => {
  //   console.log(result);
  // }, (error) => {
  //   console.log('Unable to delete', error);
  // });
  client.close();
});
