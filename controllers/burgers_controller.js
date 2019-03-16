var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// get request to retrieve the burgers from the database.
router.get("/", function(req, res) {

    burger.selectAll(function(data) {

        var burgerObj = {
            burgers: data
        };
        
        res.render("index", burgerObj);
    });
});

// handles the post request (Adding burger to database).
router.post("/api/burgers", function(req, res) {

    burger.insertOne(["burger_name", "devoured"], [req.body.name, false], function(results) {

        res.json({id: results.insertId});
    });
});

// handles put request for updating the state of the burger (eaten or not).
router.put("/api/burgers/:id", function(req, res) {

    var condition = "id = " + req.params.id;
    var newState = "devoured=";
    newState += req.body.devoured;

    burger.updateOne(newState, condition, function(results) {

        if (results.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;