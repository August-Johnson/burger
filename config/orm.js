var connection = require("./connection");

function queryQuestionMarks(valueNum) {
    var valueArr = [];

    for (var i = 0; i < valueNum; i++) {
        valueArr.push("?");
    }

    return arr.toString();
}

var orm = {
    // selecting all data from a table
    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM " + tableName + ";";

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // adding a row to a table
    insertOne: function (tableName, columnSelect, columnValues, cb) {
        var queryString = "INSERT INTO " + tableName;
        queryString += " (";
        queryString += columnSelect;
        queryString += ") ";
        queryString += "VALUES (";
        queryString += queryQuestionMarks(columnValues.length);
        queryString += ")";


        connection.query(queryString, columnValues, function (err, results) {
            if (err) throw err;
            cb(results);
        });
    },
    // updating data in a table
    updateOne: function(tableName, columnSelect, columnValue, whereCondition, cb) {
        var queryString = "UPDATE " + tableName;
        queryString += "SET " + columnSelect; 
        queryString += " = " + columnValue;
        queryString += " WHERE " + whereCondition;

        connection.query(queryString, function(err, results) {
            if (err) throw err;
            cb(results);
        })
    }
}

module.exports = orm;