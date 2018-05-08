var express  = require('express');
var app = express();

var port = 3100;
var sum = require('./database.js')

app.get('/',function(req,res){
    res.send("hiiii")
    var myobj = { name: "Company Inc", address: "Highway 38" };
    sum( myobj)
})

app.get('/test',function(req,res){
	var myobj2 = { name: "Company Inc", address: "Highway 39" };
	sum.prototype.addData2(myobj2)
})

app.listen(port, function(err){
    console.log(" errrrr  ")
})