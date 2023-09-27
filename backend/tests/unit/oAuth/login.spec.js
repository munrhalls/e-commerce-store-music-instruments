const { initializeApp, closeApp, app } = require("../../../index");
const request = require("supertest");

describe("Google oAuth Login", () => {
  beforeAll(async () => {
    await initializeApp();
  });

  afterAll(async () => {
    await closeApp();
  });

  it("should redirect user for Google oAuth", async () => {
    const response = await request(app).get("/auth/google");
    expect(response.status).toBe(302);
    expect(response.header).toHaveProperty("location");
  });
});
