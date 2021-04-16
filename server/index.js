const express = require('express');
const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({ noCors: true });
const consola = require('consola');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const { Nuxt, Builder } = require('nuxt');
require('dotenv').config();

const app = express();

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = process.env.NODE_ENV !== 'production';

server.db = router.db;

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const { host, port } = nuxt.options.server;

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  server.use(cors());

  server.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  server.use(auth);
  server.set('Secret', process.env.SECRET);
  server.use('/api', middlewares, router);

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(nuxt.render);

  app.use(express.static(__dirname + '/public'));

  app.use(helmet());

  // Listen the server
  app.listen(port, host);

  // Listen the DB server
  server.listen(process.env.DB_PORT);

  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}
start();
