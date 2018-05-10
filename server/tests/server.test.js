const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server.js');
const {Todos} = require('./../models/todo.js');

beforeEach((done) => {
  Todos.remove({}).then(() => done());
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

        Todos.find().then((todos) => {
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
      .expect(404)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todos.find().then((todos) => {
          expect(todos.length).toBe(0);
          done();
        }).catch((e) => done(e));
      });
  });
});
