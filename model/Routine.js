const mongoose = require("mongoose");

const RoutineSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  exercise: [
    {
      exercisename: {
        type: String,
        required: true
      },
      muscle: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      set: {
        type: String,
        required: true
      },
      repetition: {
        type: String,
        required: true
      },
      day: {
        type: String,
        required: true
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Routine = mongoose.model("routine", RoutineSchema);
