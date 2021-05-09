import request from 'supertest';
import { app } from '../app';

let server;
describe('user controller test', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  beforeAll(async () => {
    server = app;
  });
  it('should get "Hello World!"', (done) => {
    request(server)
      .get('/')
      .send({
        firstName: 'aaa',
        lastName: 'bbb',
        email: 'example@aaa.com',
        password: '12345',
      })
      .expect(200, {
        text: 'Hello world!',
      }, done);
  });
});
