const router = require("express").Router();
const Workout = require("../models/exercise");


router.get("/api/workouts/", function(req,res){
    //query database for Workout
    Workout.find().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    
    })});

router.put("/api/workouts/:id", function(req,res){
//update workout
Workout.findByIdAndUpdate(
    req.params.id,{
        $push: {exercises: req.body} },
        {new: true, runValidators: true}
).then (data => res.json(data))
.catch(err => {
    console.log(err)
    res.json(err)
})});

router.post("/api/workouts/", function(req,res){
//create workout
Workout.create({}).then(data =>
    res.json(data)).catch(err => {
        console.log(err)
        res.json(err)
})});

router.get("/api/workouts/range", function(req,res){
//query database for Workout
Workout.find().then(data => {
    res.json(data)
}).catch(err => {
    res.json(err)

})});



module.exports = router;
