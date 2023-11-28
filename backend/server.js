const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {});

server.listen(3000, 'localhost', () => {
  console.log('Listening on 3000...');
});
