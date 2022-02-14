const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {

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
  },
  {
    toJson: {
      virtuals: true
    }
  }
);


workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0)
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;