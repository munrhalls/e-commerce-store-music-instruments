const { initializeApp, closeApp, app } = require("../../index");
const request = require("supertest");
require("dotenv").config();

beforeAll(async () => {
  await initializeApp();
});

test("Server should be up", async () => {
  console.log(app);

  const response = await request(app).get("/auth/google");
  expect(response.status).toBe(302);
});

// Mock secure location
// jest.mock("./__mocks__/secure-location");

// Function to fetch data
// const fetchData = () => {
//   const clientId = secureLocation.getClientId();
//   const redirectUri = secureLocation.getRedirectUri();
//   return { clientId, redirectUri };
// };

// Jest Test
// test("fetches client_id and redirect_uri from secure location", () => {
//   const { clientId, redirectUri } = fetchData();

//   expect(clientId).toBe("expected_client_id");
//   expect(redirectUri).toBe("expected_redirect_uri");
// });

// describe("Google oAuth login", () => {
//   it("should redirect to Google login page", async () => {
//     const response = await request(app).get("/auth/google");
//     expect(response.status).toBe(302);
//     expect(response.header.location).toContain(
//       "https://accounts.google.com/o/oauth2/"
//     );
//   });

//   it("should redirect to Google OAuth URL", async () => {
//     const res = await request(app).get("/auth/google");
//     expect(res.headers.location).toMatch(/accounts\.google\.com/);
//   });

//   it("should generate a JWT on successful Google OAuth callback", async () => {});
// });

afterAll(async () => {
  await closeApp();
});
