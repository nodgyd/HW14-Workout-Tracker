const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const excercisesSchema = new Schema({
  
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
  date: {
    type: Date,
    default: Date.now
  }
});

const excercises = mongoose.model("workOuts", excercisesSchema);

module.exports = excercises;