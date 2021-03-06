// sets up the Node/server connection with MySQL/database

// requires mysql dependecy
var mysql = require('mysql');
var connection;

// sets connection param for database connection
// and hooking the project with JawsDB
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        // sets username
        user: "root",
        // sets password
        password: "",
        // sets current database
        database: "ice_cream_db"
    });
}

// makes connection with the database
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;