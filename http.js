const http = require('http');

/*const server = http.createServer((req, res) => {
  console.log(req);
  res.write('Hello there user');
  res.end();
});*/

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html' })
    res.write('<h1>Welcome to the homepage</h1>');
    res.end();
  }
  if (req.url === '/user') {
    res.write('Welcome user Jhonson');
    res.end();
  }
});

server.listen(3000, () => console.log('Server is up and running'));