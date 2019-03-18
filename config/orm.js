var connection = require("../config/connection.js");

// Function for how many question marks to put inside a query depending on the amount of column values used.
function queryQuestionMarks(valueNum) {
    var valueArr = [];

    for (var i = 0; i < valueNum; i++) {
        valueArr.push("?");
    }

    return valueArr.toString();
}

// ORM functions
var orm = {
    // Selecting all data from a table
    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM " + tableName + ";";

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // Adding a row to a table
    insertOne: function (tableName, columns, values, cb) {

        var queryString = "INSERT INTO " + tableName;

        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += queryQuestionMarks(values.length);
        queryString += ");";

        console.log(queryString);

        connection.query(queryString, values, function (err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    },
    // Updating data in a table
    updateOne: function (table, newColumnValue, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET " + newColumnValue
        queryString += " WHERE " + condition;

        console.log(queryString);

        connection.query(queryString, function (err, results) {
            if (err) throw err;
            cb(results);
        })
    }
}

module.exports = orm;