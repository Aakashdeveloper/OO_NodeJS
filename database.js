var mongodb = require('mongodb').MongoClient;
var express  = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


var addData = function(myobj){
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("testData1");
    dbo.collection("first").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  }); 
}


addData.prototype.addData2 = function(myobj){
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("testData1");
    dbo.collection("second").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  }); 
}

addData.prototype.update = function(query, myobj){
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("testData1");
  dbo.collection("second").update(query, myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
}
 var outRes;
addData.prototype.getData = function(colName, req,res){
 
  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("testData1")
    dbo.collection(colName).find({}).toArray(
        function(err,results){
         outRes= results
        })
  })
      console.log(outRes)
      return outRes
}

module.exports = addData;