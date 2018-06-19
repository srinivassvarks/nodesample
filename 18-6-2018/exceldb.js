
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
connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... \n\n");
    } else {
        console.log("Error connecting database ... \n\n");
    }  
});

app.get('excel',function(req,res){
    
    var conf={}
    conf.cols=[{
            caption:'Sl.',
            type:'number',
            width:3
        },
        {
            caption:'name',
            type:'string',
            width:50
        },
        {
            caption:'address',
            type:'string',
            width:50
        }
        ];
    req.getConnection(function(err,connection){
        var query=connection.query('select * from customers where user_id='+req.session.id,function(err,rows){
            arr=[];
            for(i=0;i<rows.length;i++){
                job=rows[i].job;
                name=rows[i].name;
                a=[i+1,job,name];
                arr.push(a);
                }
                conf.rows=arr;
                var result=nodeExcel.execute(conf);
                res.setHeader('Content-Type','application/vnd.openxmlformates');
                res.setHeader("Content-Disposition","attachment;filename="+"srini.xlsx");
                res.end(result,'binary');
                
            });
    });
});