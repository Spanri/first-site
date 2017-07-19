var http = require('http');
var static = require('node-static');
const routing = require('./routing');
var file = new static.Server('.');

http.createServer(function(req, res) {
  file.serve(req, res);
}).listen(8080);

console.log('Server running on port 8080');

let server = new http.Server(function(req, res) {
  // API сервера будет принимать только POST-запросы и только JSON, так что записываем
  // всю нашу полученную информацию в переменную jsonString
  var jsonString = '';
  res.setHeader('Content-Type', 'application/json');
  req.on('data', (data) => { // Пришла информация - записали.
      jsonString += data;
  });

  req.on('end', () => {// Информации больше нет - передаём её дальше.
      routing.define(req, res, jsonString); // Функцию define мы ещё не создали.
  });
});
