const axios = require("axios");

async function fetchSentryIssues() {
  try {
    const response = await axios.get(
      `https://sentry.io/api/0/projects/${process.env.SENTRY_ORG}/${process.env.SENTRY_PROJ}/issues/`,
      {
        headers: {
          Authorization: `Bearer ${process.env.SENTRY}`,
        },
      }
    );
    console.log("Latest Issues:", response.data);
  } catch (error) {
    console.error("Error fetching issues:", error);
  }
}

fetchSentryIssues();
