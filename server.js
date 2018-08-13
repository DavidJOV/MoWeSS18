var express = require('express'),
    app = express(),
    session = require('express-session');
    path = require("path");
    var request = require('request');
    //var main =require("/main.js");
    var mysql= require('mysql');
    
    var connection = mysql.createConnection({
      host     : 'localhost',
      port     : '8889',
      user     : 'root',
      password : 'root',
      database : 'mowe'
    });
    connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... nn");
    } else {
        console.log("Error connecting database ... nn");
    }
    });

app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));
 
// Authentication and Authorization Middleware
var auth = function(req, res, next) {
  if (req.session && req.session.user != "" && req.session.admin)
    return next();
  else
  return res.sendFile(__dirname+"/notAuth.html")
    
};
 
// Login endpoint
app.get('/login', function (req, res) {
  
  if (!req.query.username || !req.query.password) {
    res.sendFile(__dirname+"/login.html");
  

       
  } else if(req.query.username != "" && req.query.password != "") {
  
    var username= req.query.username;
    var password = req.query.password;
    connection.query('SELECT * FROM User WHERE Name = ?',[username], function (error, results, fields) {
    if (error) {
      // console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      // console.log('The solution is: ', results);
      if(results.length >0){
        if(results[0].Passwort == password){
          req.session.user = req.query.username;
          req.session.admin = true;
    
          res.sendFile(__dirname+"/logedin.html");
             }
        else{
          res.send({
            "code":204,
            "success":"Name and password does not match"
              });
        }
      }
      else{
        res.send({
          "code":204,
          "success":"Name does not exits"
            });
      }
    }
    })};
  })
  
    
    
    
    
    
    
   
// Logout endpoint
app.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("logout success!");
});
 
// Get content endpoint
app.get('/index', auth, function (req, res) {
  
    res.sendFile(__dirname+"/index.html");
});
app.get('/main.js', function(req, res) {
  res.sendFile(__dirname+'/main.js');
});

app.get('/witz.json',function(req,res){
  res.sendFile(__dirname+"/witz.json");
})
 
app.listen(3000);
app.use(express.static("public"))
console.log("app running at http://localhost:3000");






