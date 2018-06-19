
var express=require('express');
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var nodeExcel=require('excel-export');



var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sa',
    database: 'test3'
});

var app = express();
app.use(bodyParser.json());


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "select * from customers";
  
  //step-4
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
      console.log(result[1].address);
      console.log(result[3].name);
    });
  });