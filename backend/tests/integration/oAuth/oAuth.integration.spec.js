const { initializeApp, closeApp, app } = require("../../../index");
const request = require("supertest");
require("dotenv").config();

beforeAll(async () => {
  await initializeApp();
});

test("INTEGRATION oAuth: Server should be up", async () => {
  const response = await request(app).get("/auth/google");
  expect(response.status).toBe(302);
});

describe("INTEGRATION oAuth: OAuth Google Login", () => {
  it("should redirect to Google login page", async () => {
    const response = await request(app).get("/auth/google");
    expect(response.status).toBe(302);
    expect(response.header.location).toContain(
      "https://accounts.google.com/o/oauth2/"
    );
  });

  it("should redirect to Google OAuth URL", async () => {
    const res = await request(app).get("/auth/google");
    expect(res.headers.location).toMatch(/accounts\.google\.com/);
  });

  it("should generate a JWT on successful Google OAuth callback", async () => {});
});

describe("Twitter OAuth", () => {
  // Twitter OAuth tests here
});

describe("Facebook OAuth", () => {
  // Facebook OAuth tests here
});

describe("Spotify OAuth", () => {
  // Spotify OAuth tests here
});

afterAll(async () => {
  await closeApp();
});
