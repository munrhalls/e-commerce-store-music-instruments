const request = require("supertest");
const { closeMongoDBConnection } = require("../index"); //

let server;

beforeAll(() => {
  server = require("../index");
});

afterAll(() => {
  server.close();
  closeMongoDBConnection();
});

describe("Google OAuth", () => {
  it("should redirect to Google login", async () => {
    const res = await request(server).get("/auth/google");
    expect(res.statusCode).toBe(302);
  });

  it("should handle error", async () => {
    const res = await request(server).get(
      "/auth/google/callback?error=access_denied"
    );
    expect(res.statusCode).toBe(401);
  });
});
