const router = require("express").Router();
const Workout = require("../models/exercises");

router.put("/api/Workout/:id", function(req,res){
//update workout
Workout.findByIdAndUpdate(
    params.id,{
        $push: {exercises: body} },
        {new: true}
).then (data => res.json(data))
.catch(err => {
    console.log(err)
    res.json(err)
})})

router.post("/api/Workout/", function(req,res){
//create workout
Workout.create({}).then(data =>
    res.json(data)).catch(err => {
        console.log(err)
        res.json(err)
})})

router.get("/api/Workout/range", function(req,res){
//query database for Workout
Workout.find().then(data => {
    res.json(data)
}).catch(err => {
    res.json(err)

})})



module.exports = router;
