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
	var myobj2 = { name: "google Inc", address: "road 39" };
	sum.prototype.addData2(myobj2)
})

app.get('/update',function(req,res){
    var query = { name: "google Inc"}
	var myobj2 =  { $set: {name: "facebook", address: "Canyon 123" } };
	sum.prototype.update(query, myobj2)
})

app.get('/result',function(req,res){
    let out = sum.prototype.getData("first")
    //const out1 = JSON.parse(out)
    var out1 = JSON.stringify(out)
    res.send(out1)
    console.log("2nd out 111"+ JSON.stringify(out))
    //console.log("2nd out "+ out1)
})

app.get('/delete',function(req,res){
    var myobj2 = { name: "google Inc"};
    sum.prototype.delete(myobj2)
})

app.listen(port, function(err){
    console.log(" errrrr  ")
})