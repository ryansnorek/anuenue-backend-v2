const express = require('express');
const server = express();

const cors = require('cors');
const helmet = require('helmet');

server.use(helmet());
server.use(cors());
server.use(express.json());

const adminRouter = require('./api/routes/admin-router');

server.use('/admin', adminRouter);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
