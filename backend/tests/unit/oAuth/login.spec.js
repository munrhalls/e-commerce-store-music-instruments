const { initializeApp, closeApp, app } = require("../../../index");
const request = require("supertest");

beforeAll(async () => {
  await initializeApp();
});

afterAll(async () => {
  await closeApp();
});

test("Server should be up", async () => {
  const response = await request(app).get("/auth/google");
  expect(response.status).toBe(302);
});
