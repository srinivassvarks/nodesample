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

app.get('/excel',function(req,res){
    
    var conf={}
    conf.cols=[{
            caption:'string',
            type:'string',
            beforeCellWrite:function(row, cellData){
                return cellData.toUpperCase();
           },
            width:20
        },
        {
            caption:'string',
            type:'string',
            beforeCellWrite:function(row, cellData){
                return cellData.toUpperCase();
           },
            width:50
        }
        
        ];
    
        connection.query('select * from customers' ,function(err,rows){
            
            
            arr=[];
            for(i=0;i<rows.length;i++){
                name=rows[i].name;
                address=rows[i].address;
                a=[name,address];
                arr.push(a);
         
                }
                conf.rows=arr;
    var result=nodeExcel.execute(conf);
    res.setHeader('Content-Type','application/vnd.openxmlformates');
    res.setHeader("Content-Disposition","attachment;filename="+"srini.xlsx");
    res.end(result,'binary');
    console.log(arr);
            });
    });


app.listen(3000);
console.log('Listening on port 3000');