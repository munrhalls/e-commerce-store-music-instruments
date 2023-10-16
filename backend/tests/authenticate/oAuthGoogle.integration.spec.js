// oauth works well if:

// oauth route for oauth request is not missing
// oauth route redirects to google provider
// oauth route imports server credentials for google securely
// oauth route exchanges authorization code for token
// oauth route gets email from google with token request
// oauth route handles register new user if missing in db
// oauth route detects existing user if present in db
// oauth route generates jwt token for existing user
// oauth route transmits jwt + header to frontend
// logged user is recognized via header payload and frontend variable



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

});

afterAll(async () => {
  await closeApp();
});
