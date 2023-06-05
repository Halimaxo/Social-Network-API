const express = require("express").Router();
const {
  getAllUsers,
  singleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userControllers");

express.route("/").get(getAllUsers).post(createUser);

express.route("/:userId").get(singleUser).put(updateUser).delete(deleteUser);

module.exports = express;
