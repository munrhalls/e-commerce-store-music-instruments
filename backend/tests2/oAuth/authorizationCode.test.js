// authorizationCode.test.js for Backend using Jest and Puppeteer

const puppeteer = require("puppeteer");
const request = require("supertest");
const app = require("../../index");

let browser, page, authCode;

describe("Authorization Code Test", () => {
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("/auth/google");
    authCode = await obtainAuthCodeFromPuppeteer();
  });

  afterAll(async () => {
    await browser.close();
  });

  it("should successfully exchange authorization code for token", async () => {
    const response = await request(app)
      .get("/auth/google/callback")
      .query({ code: authCode });

    expect(response.status).toBe(200);
    expect(response.body.access_token).toBeDefined();
    expect(typeof response.body.access_token).toBe("string");
  });
});

// Example function to obtain Google OAuth authorization code using Puppeteer

async function obtainAuthCodeFromPuppeteer() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://accounts.google.com/o/oauth2/v2/auth");

  // Simulate user actions for Google Sign-In
  await page.type("#identifierId", "luxlogiumtest@gmail.com");
  await page.click("#identifierNext");
  await new Promise((r) => setTimeout(r, 2000));
  await page.type('input[name="password"]', "1234!@#$");
  await page.click("#passwordNext");

  // Capture the authorization code from the redirect URL
  const authCode = await new Promise((resolve) => {
    page.on("response", async (response) => {
      const url = response.url();
      if (url.includes("code=")) {
        const urlParams = new URLSearchParams(url.split("?")[1]);
        resolve(urlParams.get("code"));
      }
    });
  });

  await browser.close();
  console.log("Auth Code:", authCode);
  console.log(
    authCode
      ? "GOOGLE SIGN IN: SUCCESS"
      : "GOOGLE SIGN IN ERROR: AUTHORIZATION CODE IS NULL DURING OAUTH GOOGLE SIGN IN. "
  );

  return authCode;
}
