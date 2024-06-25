//1 .Server Setup HTTP

// Import the http module
const http = require('http');

//Define the callback function
const requestListener = (req, res) => {
  res.writeHead(200);
  res.end('Hello, World!');
};

// Server initialization

const server = http.createServer(requestListener);

// Listen on port 8080
server.listen(8080);