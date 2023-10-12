const { initializeApp, closeApp, app } = require("../../index");
const request = require("supertest");
require("dotenv").config({ path: ".env.test" });
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

let response;

beforeAll(async () => {
  await initializeApp();
  response = await request(app).get("/auth/google");
});

describe("Google oAuth", () => {
  describe("When user visits Google oAuth URL to sign in or sign up:", () => {
    it("Google oAuth route should not be missing (no 404)", async () => {
      expect(response.status).not.toBe(404);
    });

    it("Passport: 3rd party package for oAuth, should redirect -> HTTP: 302", () => {
      expect(response.status).toBe(302);
    });
  });

  describe("On redirect to Google oAuth endpoint:", () => {
    beforeAll(() => {
      if (response.status !== 302) {
        it.skip("Skipping rest of oAuth tests due to missing redirect");
      }
    });

    it("should go to Google's OAuth endpoint", () => {
      expect(response.headers.location).toContain(
        "https://accounts.google.com/o/oauth2/v2/auth"
      );
    });
  });

  // describe("When Google oAuth route is called, 3rd party package - passport - should redirect that request -> HTTP status should be 302", () => {
  //   beforeAll(() => {
  //     if (response.status !== 302) {
  //       it.skip("Skipping tests due to failed redirect");
  //     }
  //   });

  //   test("When Google oAuth route is called, 3rd party package - passport - should redirect that request -> HTTP status should be 302", async () => {
  //     expect(response.status).toBe(302); // HTTP status for redirect
  //   });

  //   test("When 3rd party package passport redirects, it should go to Google's oAuth endpoint -> should be in response's headers", () => {
  //     expect(response.headers.location).toContain(
  //       "https://accounts.google.com/o/oauth2/v2/auth"
  //     );
  //   });
  // });
});

afterAll(async () => {
  await closeApp();
});
