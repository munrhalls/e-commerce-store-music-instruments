const { initializeApp, closeApp, app } = require("../../../index");
const request = require("supertest");

beforeAll(async () => {
  await initializeApp();
});

describe("UNIT: OAuth Google Login", () => {
  it("should redirect to Google login page", async () => {
    const response = await request(app).get("/auth/google");
    expect(response.status).toBe(302);
    expect(response.header.location).toContain(
      "https://accounts.google.com/o/oauth2/"
    );
  });
});

afterAll(async () => {
  await closeApp();
});

test("UNIT: Server should be up", async () => {
  const response = await request(app).get("/auth/google");
  expect(response.status).toBe(302);
});
