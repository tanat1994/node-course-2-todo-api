const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server.js');
const {Todos} = require('./../models/todo.js');

const dummyTodos = [
  {
    'text' : 'First todo'
  },
  {
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
