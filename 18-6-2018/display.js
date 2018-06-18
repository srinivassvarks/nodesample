var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sa',
    database: 'test3'
});
var app = express();
app.use(bodyParser.json());
connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... \n\n");
    } else {
        console.log("Error connecting database ... \n\n");
    }  
});

app.get("/showDetails", function (req, res) {
    connection.query('SELECT * from customers', function (err, rows, fields) {
        
        if (!err){
            console.log("data:"+rows);
        }
        else{
            res.json({"statusCode":"E100","statusMessage":"Problem while getting data"});
        }
    });
});
console.log("running in port 3000")
app.listen(3000);