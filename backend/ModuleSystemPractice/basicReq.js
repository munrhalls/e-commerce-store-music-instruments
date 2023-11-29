// const http = require('http');

// http.request('www.google.com', res => {
//   res.on('data', chunk => console.log(`Yo, received a chunk: ${chunk}.`));
// });

const { get } = require('node:https');

get('https://www.google.com/', res => {
  res.on('data', chunk => console.log(`Yo, received a chunk BODY: ${chunk}.`));
  res.on('end', () => {
    console.log('No more data in the response.');
  });
});
