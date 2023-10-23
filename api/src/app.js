const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const cors = require('cors');

require('./db.js');

const server = express();

server.name = 'API';

// Logging
server.use(morgan('dev'));

// Body parsing
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

// Cookies
server.use(cookieParser());

// Configura CORS
const corsOptions = {
  origin: 'https://visit-matina-tau.vercel.app', // Permite solo este origen
  methods: 'GET, POST, OPTIONS, PUT, DELETE',
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  credentials: true,
  maxAge: 86400, // Cache durante 1 día
};

server.use(cors(corsOptions));

// Routes
server.use('/api/', routes);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
