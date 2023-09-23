const request = require("supertest");
const { app, startServer } = require("../index"); // Replace with your actual path
const { closeMongoDBConnection } = require("../index"); // Replace with your actual path

let server;

beforeAll(() => {
  server = startServer();
});

afterAll(() => {
  server.close();
  closeMongoDBConnection();
});

describe("Google OAuth", () => {
  it("should redirect to Google login", async () => {
    const res = await request(app).get("/auth/google");
    expect(res.statusCode).toBe(302);
  });

  it("should handle error", async () => {
    const res = await request(app).get(
      "/auth/google/callback?error=access_denied"
    );
    expect(res.statusCode).toBe(401);
  });
});
