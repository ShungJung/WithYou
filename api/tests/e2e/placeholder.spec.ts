import request from 'supertest';
import { Server } from 'http';
import app from '../../src/index'; // Your Express app

let server: Server;

beforeAll((done) => {
  server = app.listen(0, done); // random available port
});

afterAll((done) => {
  server.close(done);             // close server
});

describe('Placeholder e2e test', () => {
    it('should return 200 OK for the root route', async () => {
        const res = await request(server).get('/');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('message', 'WithYou API is running!');
    });
});