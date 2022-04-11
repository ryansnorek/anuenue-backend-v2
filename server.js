const express = require("express");
const server = express();

const cors = require("cors");
const helmet = require("helmet");

server.use(helmet());
server.use(
  cors({ origin: "http://localhost:3000" })
);
server.use(express.json());
server.use(express.static("images"));

const adminRouter = require("./api/routes/admin-router");
const storeRouter = require("./api/routes/store-router");
const stripeRouter = require("./api/routes/stripe-router");

server.use("/admin", adminRouter);
server.use("/store", storeRouter);
server.use("/stripe", stripeRouter);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
