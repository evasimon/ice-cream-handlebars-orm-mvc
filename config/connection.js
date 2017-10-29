// sets up the Node/server connection with MySQL/database

// requires mysql dependecy
var mysql = require('mysql');

// sets connection param for database connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // sets username
    user: "root",
    // sets password
    password: "",
    // sets current database
    database: "ice_cream_db"
});

// makes connection with the database
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;