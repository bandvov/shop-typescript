import request from 'supertest';
import { app } from '../app';
import User from '../models/User';
import { connectDb } from '../db';
import {
  DELETE_USER_ROUTE,
  UPDATE_USER_ROUTE,
  REGISTER_ROUTE,
  LOGIN_ROUTE,
} from '../configs';

const newUserData = {
  email: 'new@aa.aa',
  password: '123456',
  firstName: 'Vova',
  lastName: 'Vas',
};
let createdUserId;
const fakeUserId = '6098e3fc5fc9d803043fec33';

describe('UserController', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  beforeAll(() => {
    connectDb();
    new User(newUserData).save();
  });
  afterAll(async () => {
    await User.findByIdAndDelete(createdUserId);
  });

  test('Test missing email', (done) => {
    request(app)
      .post(REGISTER_ROUTE)
      .type('form')
      .send({ password: '123456', firstName: 'Vova', lastName: 'Vas' })
      .expect(400)
      .end((err, res) => {
        expect(res.body.message).toBe('Missing parameters');
        done();
      });
  });

  test('Test missing password', (done) => {
    request(app)
      .post(REGISTER_ROUTE)
      .type('form')
      .send({ email: 'aa@aa.aa', firstName: 'Vova', lastName: 'Vas' })
      .end((err, res) => {
        expect(res.status).toBe(400);
        expect(res.body.message).toBe('Missing parameters');
        done();
      });
  });

  test('Test missing firstName', (done) => {
    request(app)
      .post(REGISTER_ROUTE)
      .type('form')
      .set('Accept', 'application/json')
      .send({ email: 'aa@aa.aa', password: '123456', lastName: 'Vas' })
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.status).toBe(400);
        expect(res.body.message).toBe('Missing parameters');
        done();
      });
  });

  test('Test missing lastName', (done) => {
    request(app)
      .post(REGISTER_ROUTE)
      .type('form')
      .set('Accept', 'application/json')
      .send({ email: 'aa@aa.aa', password: '123456', firstName: 'Vova' })
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.status).toBe(400);
        expect(res.body.message).toBe('Missing parameters');
        done();
      });
  });

  test('Test user already exist', (done) => {
    request(app)
      .post(REGISTER_ROUTE)
      .type('form')
      .set('Accept', 'application/json')
      .send(newUserData)
      .end((err, res) => {
        expect(res.status).toBe(400);
        expect(res.body.message).toBe('User already exist');
        done();
      });
  });

  test('Create new user', (done) => {
    request(app)
      .post(REGISTER_ROUTE)
      .type('form')
      .set('Accept', 'application/json')
      .send({ ...newUserData, email: 'bac@hh.ds' })
      .end((err, res) => {
        expect(res.status).toBe(201);
        createdUserId = res.body.id;
        expect(res.body.message).toBe('User successfully registered');
        done();
      });
  });

  test('Login user', (done) => {
    request(app)
      .post(LOGIN_ROUTE)
      .type('form')
      .set('Accept', 'application/json')
      .send({ email: 'bac@hh.ds', password: newUserData.password })
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Successfully logged in');
        done();
      });
  });

  test('Login user', (done) => {
    request(app)
      .post(LOGIN_ROUTE)
      .type('form')
      .set('Accept', 'application/json')
      .send({ email: 'notexist@hh.ds', password: '123fdfs' })
      .end((err, res) => {
        expect(res.status).toBe(404);
        expect(res.body.message).toBe('User not found');
        done();
      });
  });

  test('should update user', (done) => {
    request(app)
      .put(UPDATE_USER_ROUTE.replace(':id', createdUserId))
      .set('Accept', 'application/json')
      .send({
        email: 'updated@aa.aa',
        pasword: '1654bfgd',
        firstName: 'updated firstName',
        lastName: 'updated lastName',
        active: false,
        confirmed: true,
        avatar: 'dasasdasdasd',
      })
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('User data successfully updated');
        done();
      });
  });

  test('update not existing user should return error', (done) => {
    request(app)
      .put(UPDATE_USER_ROUTE.replace(':id', fakeUserId))
      .set('Accept', 'application/json')
      .send({
        email: 'updated@aa.aa',
        pasword: '1654bfgd',
        firstName: 'updated firstName',
        lastName: 'updated lastName',
        active: false,
        confirmed: true,
        avatar: 'dasasdasdasd',
      })
      .end((err, res) => {
        expect(res.status).toBe(404);
        expect(res.body.message).toBe('User not found');
        done();
      });
  });

  test('should delete user', (done) => {
    request(app)
      .delete(DELETE_USER_ROUTE.replace(':id', createdUserId))
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('User successfully deleted');
        done();
      });
  });

  test('should return error if delete not existing user', (done) => {
    request(app)
      .delete(DELETE_USER_ROUTE.replace(':id', fakeUserId))
      .end((err, res) => {
        expect(res.status).toBe(404);
        expect(res.body.message).toBe('User not found');
        done();
      });
  });
});
