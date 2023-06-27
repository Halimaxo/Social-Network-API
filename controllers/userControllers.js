const { User, Thought } = require("../models");

const userControllers = {
  async getAllUsers(req, res) {
    try {
      console.log(userControllers);
      const allUsers = await User.find();
      res.json(allUsers);
    } catch (Error) {
      res.status(500).json(Error);
    }
  },
  async singleUser(req, res) {
    try {
      const singleUser = await User.findOne({
        _id: req.params.userId,
      });
      res.json(singleUser);
    } catch (Error) {
      res.status(500).json(Error);
    }
  },
  async createUser(req, res) {
    try {
      const createUser = await User.create(req.body);
      res.json(createUser);
    } catch (Error) {
      res.status(500).json(Error);
    }
  },
  async updateUser(req, res) {
    try {
      const updateUser = await User.findOneAndUpdate(
        {
          _id: req.params.userId,
        },
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.json(updateUser);
    } catch (Error) {
      res.status(500).json(Error);
    }
  },
  async deleteUser(req, res) {
    try {
      const deleteUser = await User.findOneAndDelete({
        _id: req.params.userId,
      });
      res.json(req.params.userId);
    } catch (Error) {
      res.status(500).json(Error);
    }
  },
};

module.exports = userControllers;
