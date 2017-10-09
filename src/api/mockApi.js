var jsonServer = require('json-server');
var server = jsonServer.create();
var path = require('path');
var router = jsonServer.router(path.join(__dirname, 'mockDB.json'));
var middlewares = jsonServer.defaults();
const PORT = 3001;

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  /* if you need custom responses beyond what json-server provides add them here */

  next();
});

server.use(
  jsonServer.rewriter({
    '/mockApi/*': '/$1',
    '/mockApi': '/base'
  })
);

server.use(router);

server.listen(PORT, function() {
  console.log('JSON Server is running');
});
