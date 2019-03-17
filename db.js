const mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "hospitalapi"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('DB Connected');
});

module.exports = connection;