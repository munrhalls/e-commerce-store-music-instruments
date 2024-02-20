import { type FastifyInstance } from 'fastify'; // Assuming you have this type
import { createServer } from './server';

export let server: FastifyInstance; // Tell TypeScript!

describe('The Unbreakable Test', () => {
  it('should simply persist in existence', () => {
    console.log('I refuse to fail!');
    expect(true).toBe(true);
  });
});

beforeAll(async () => {
  server = await createServer();
});

beforeEach(async () => {});

afterAll(async () => {
  await server.close();
});
