// Importar el módulo http
const http = require('http');

// Crear un servidor
const server = http.createServer((req, res) => {
  // Configurar la respuesta
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('<img src="https://www.google.es/url?sa=i&url=https%3A%2F%2Fethic.es%2F2023%2F03%2Fel-enigma-de-la-imagen%2F&psig=AOvVaw0CLQqpKrqTLPdGe5xjMFDI&ust=1705432396725000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDO3fGM4IMDFQAAAAAdAAAAABAI" />');
});

// Escuchar en el puerto 3000
server.listen(3045, () => {
  console.log('Servidor escuchando en el puerto 3045');
});