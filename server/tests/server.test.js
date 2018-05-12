const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server.js');
const {Todos} = require('./../models/todo.js');

const dummyTodos = [
  {
    _id : new ObjectID(),
    'text' : 'First todo'
  },
  {
    _id : new ObjectID(),
    'text' : 'Second todo'
  }
];

beforeEach((done) => {
  Todos.remove({}).then(() => {
    return Todos.insertMany(dummyTodos);
  }).then(() => done());
});

describe('POST /todos', () => {
  it('should create new todos', (done) => {
    var text = 'Test todo text from server.test.js';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todos.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });


  it('should not create new todos with invalid data', (done) => {
    request(app)
      .post('/todos')
      .send()
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todos.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
  });
});



describe('GET /todos', () => {
  it('should get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .end(done);
  });
});


describe('GET /todos/:id', () => {
  it('should return todos by id', (done) => { //async test should add done
    request(app)
      .get(`/todos/${dummyTodos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) => {
        console.log(res.body.todo_doc.id);
        expect(res.body.todo_doc.text).toBe(dummyTodos[0].text);
      })
      .end(done);
  });

  it('should return 404 if todo not found', (done) => {
    var hexId = new ObjectID().toHexString();
    request(app)
      .get(`/todo/${hexId}`)
      .expect(404)
      .end(done);
  });

  it('should return 404 for non-object ids', (done) => {
    request(app)
      .get(`/todo/123444`)
      .expect(404)
      .end(done);
  });
});
