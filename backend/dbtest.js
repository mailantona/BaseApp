var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    port: "52798",
    user: "azure",
    password: "6#vWHD_$",
    database: "localdb"
});

connection.connect();

connection.query('SELECT * FROM customers', function (error, results, fields) {
    if (error) throw error;
    res.status(200).json({
        "items": results
    });
});

connection.end();