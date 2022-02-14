const router = require("express").Router();
const workOuts = require("../models/excercises.js");

router.put("/api/workouts/:id", function(req,res){
//update workout
workOuts.findByIdAndUpdate(
    params.id,{
        $push: {exercises: body} },
        {new: true}
).then (data => res.json(data))
.catch(err => {
    console.log(err)
    res.json(err)
})

router.post("/api/workouts/", function(req,res){
//create workout
workOuts.create({}).then(data =>
    res.json(data)).catch(err => {
        console.log(err)
        res.json(err)
})

router.get("/api/workouts/range", function(req,res){
//query database for workouts
workOuts.find().then(data => {
    res.json(data)
}).catch(err => {
    res.json(err)

})



module.exports = router;
