const express = require("express").Router();

const {
  getAllThoughts,
  singleThought,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtControllers");

express.route("/").get(getAllThoughts).post(createThought);

express
  .route("/:thoughtId")
  .get(singleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = express;
