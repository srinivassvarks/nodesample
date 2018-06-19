var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var csv = require('csv-express');
var app = express();



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