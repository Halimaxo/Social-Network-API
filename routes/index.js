const apiRoutes = require("./API");

const express = require("express").Router();

express.use("/api", apiRoutes);

module.exports = express;
