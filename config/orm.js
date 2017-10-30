var connection = require('./connection');

// creates the methods that will execute the necessary MySQL commands in the controllers

var orm = {
    selectAll: function (table, func) {
        connection.query(`SELECT * FROM ${table};`, function (err, data) {
            if (err) throw err;
            func(data);
        });
    },
    insertOne: function (table, inputName, inputValue, func) {
        connection.query(`INSERT INTO ${table} SET ${inputName} = ?`, [inputValue], function (err, data) {
            if (err) throw err;
            func();
        });
    },
    updateOne: function (table, id, idValue, devoured, func) {
        connection.query(`UPDATE ${table} SET ${devoured} = true WHERE ${id} = ?`, [idValue], function (err, result) {
            if (err) throw err;
            func();
        });
    }
};

module.exports = orm;

