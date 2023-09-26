require("dotenv").config();
const { exec } = require("child_process");
const axios = require("axios");

console.log(
  `https://${process.env.SENTRY_ORG}.sentry.io/issues/?project=process.env.SENTRY_PROJ`
);
console.log(
  `https://sentry.io/api/0/projects/${process.env.SENTRY_ORG}/${process.env.SENTRY_PROJ}`
);

async function fetchSentryIssues() {
  try {
    const response = await axios.get(
      `https://${process.env.SENTRY_ORG}.sentry.io/issues/?project=${process.env.SENTRY_PROJ}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.SENTRY_AUTH_TOKEN}`,
        },
      }
    );
    console.log("Latest Issues:", response.data);
  } catch (error) {
    console.error("Error fetching issues:", error.response.data);
  }
}

function openInBrowser() {
  const url = `https://${process.env.SENTRY_ORG}.sentry.io/issues/?project=${process.env.SENTRY_PROJ}`;
  exec(`start ${url}`, (error) => {
    if (error) {
      console.error("Failed to open browser:", error);
    }
  });
}

fetchSentryIssues();
openInBrowser();
