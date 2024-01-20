const express = require('express');

const PORT = 3031;

const server = express();

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello Neoland!');
});

router.get('/movies', (req, res) => {
  const movies = ['Harry Potter', 'Titanic', 'Back to the Future'];
  res.send(movies);
});

server.use('/', router);


server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});