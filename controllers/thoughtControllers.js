const { User, Thought } = require("../models/index");

const thoughtControllers = {
  async getAllThoughts(req, res) {
    try {
      const allThoughts = await Thought.find();
      res.json(allThoughts);
    } catch (Error) {
      res.status(500).json(Error);
    }
  },
  async singleThought(req, res) {
    try {
      const singleThought = await Thought.findOne({
        _id: req.params.thoughtId,
      });
      res.json(singleThought);
    } catch (Error) {
      res.status(500).json(Error);
    }
  },
  async createThought(req, res) {
    try {
      const createThought = await Thought.create(req.body);
      res.json(createThought);
    } catch (Error) {
      res.status(500).json(Error);
    }
  },
  async updateThought(req, res) {
    try {
      const updateThought = await User.findOneAndUpdate(
        {
          _id: req.params.thoughtId,
        },
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.json(updateThought);
    } catch (Error) {
      res.status(500).json(Error);
    }
  },
  async deleteThought(req, res) {
    try {
      const deleteThought = await User.findOneAndDelete({
        _id: req.params.thoughtId,
      });
    } catch (Error) {
      res.status(500).json(Error);
    }
  },
};

module.exports = thoughtControllers;
