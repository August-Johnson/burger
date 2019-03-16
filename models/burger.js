var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (columns, values, cb) {
        orm.insertOne("burgers", columns, values, function (res) {
            cb(res);
        });
    },
    updateOne: function (colNewValue, condition, cb) {
        orm.updateOne("burgers", colNewValue, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;