const reactionSchema = require("./Reaction");
const mongoose = require("mongoose");
const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    // get: Timestamp,
  },

  username: {
    type: String,
    required: true,
  },

  reactions: [reactionSchema],
});

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
