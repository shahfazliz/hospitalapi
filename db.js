const mysql = require('mysql');
const username = process.env.C9_USER || "root";

let connection = mysql.createConnection({
    host: "localhost",
    user: username,
    password: "",
    database: "hospitalapi"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('DB Connected');
});

module.exports = connection;