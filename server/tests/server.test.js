const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

describe('POST /users/login', () => {
    it('should login user return auth token', (done) => {
      request(app)
        .post('/users/login')
        .send({
            email:"JESUS@heaven.com",
            password: "JESUSMYREFUGE"
        })
        .expect(200)
        .expect((res) => {
            expect(res.header['x-auth']).toExist();
        })
        .end((err, res) => {
            if (err) {
                return done(err);
            }
        })
    });

});