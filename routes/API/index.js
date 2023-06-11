const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");
const express = require("express").Router();

express.use("/user", userRoutes);
express.use("/thought", thoughtRoutes);

module.exports = express;
