const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'GET' && req.url === '/api/hello') {
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'Hello from backend!' }));

  } else if (req.method === 'POST' && req.url === '/api/data') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      res.writeHead(200);
      res.end(JSON.stringify({ received: JSON.parse(body) }));
    });

  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(3000, () => console.log('Server running on port 3000'));
