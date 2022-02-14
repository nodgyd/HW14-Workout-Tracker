const router = require("express").Router();
const path = require("path")

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))

})

router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"))

})

router.get("/excercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/excercise.html"))

})

module.exports = router