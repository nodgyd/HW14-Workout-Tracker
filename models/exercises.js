const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  
    exercises: [
        {
          type: {type: String},
          name: {type: String},
          duration: {type: Number},
          weight: {type: Number},
          reps: {type: Number},
          sets: {type: Number},
        }
      ],
  day: {
    type: Date,
    default: Date.now
  }
});

const Excercises = mongoose.model("workOuts", workoutSchema);

module.exports = Excercises;