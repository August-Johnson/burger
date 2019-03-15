var orm = require("../config/orm");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (columnSelect, columnValues, cb) {
        orm.insertOne("burgers", columnSelect, columnValues, function (res) {
            cb(res);
        });
    },
    updateOne: function (columnValue, condition, cb) {
        orm.updateOne("burgers", "devoured", columnValue, condition, function (res) {
            cb(res);
        });
    }
}

module.exports = burger;