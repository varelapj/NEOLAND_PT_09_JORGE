const http = require('http');
const fs = require('fs');

const requestHandler = (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end('<img src="https://ethic.es/wp-content/uploads/2023/03/imagen-1280x768.jpg" />');
  } else if (req.url === '/users' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({name: 'John', age: 30}));
  } else if (req.url === '/users' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const user = JSON.parse(body);
      fs.writeFile('users.txt', JSON.stringify(user), (err) => {
        if (err) throw err;
        res.writeHead(201);
        res.end('User created');
      });
    });
  } else {
    res.writeHead(404);
    res.end('404 Not Found');
  }
};

const PORT = 3045;
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server started in http://localhost:${PORT}`);
});