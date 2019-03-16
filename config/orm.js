var connection = require("../config/connection.js");

function queryQuestionMarks(valueNum) {
    var valueArr = [];

    for (var i = 0; i < valueNum; i++) {
        valueArr.push("?");
    }

    return valueArr.toString();
}

var orm = {
    // selecting all data from a table
    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM " + tableName + ";";

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // adding a row to a table
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
    // updating data in a table
    updateOne: function (tableName, columnSelect, columnValue, whereCondition, cb) {
        var queryString = "UPDATE " + tableName;
        queryString += "SET " + columnSelect;
        queryString += " = " + columnValue;
        queryString += " WHERE " + whereCondition;

        console.log(queryString);

        connection.query(queryString, function (err, results) {
            if (err) throw err;
            cb(results);
        })
    }
}

module.exports = orm;