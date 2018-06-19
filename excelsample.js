var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var csv = require('csv-express');

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

app.get('/excel',function(req,res){
    
    res.attachment('crosslistFormatFile.csv');
    res.charset="ISO-8859-1"
    csv.separator=';'

    res.csv([
        {"name": "Sam", "age": 1},
        {"name": "Mary", "age": 2}
    ],false)
    });


app.listen(3000);
console.log('Listening on port 3000');