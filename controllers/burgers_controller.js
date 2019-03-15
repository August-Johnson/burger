var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.selectAll(function(results) {
        res.render("index", {burgers: results});
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne("burger_name", [req.body.burgerName], function(results) {

        res.json({id: results.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne()
});



module.exports = router;