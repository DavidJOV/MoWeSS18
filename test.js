var express = require('express'),
    app = express(),
    session = require('express-session');
    path = require("path");
    var request = require('request');
    
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));
 
// Authentication and Authorization Middleware
var auth = function(req, res, next) {
  if (req.session && req.session.user === "Max" && req.session.admin)
    return next();
  else
    return res.sendStatus(401);
};
 
// Login endpoint
app.get('/login', function (req, res) {
  console.log("1")
  if (!req.query.username || !req.query.password) {
    res.sendFile(__dirname+"/login.html");
  console.log("2")

       
  } else if(req.query.username === "Max" && req.query.password === "123") {
  console.log("3")

    req.session.user = "Max";
    req.session.admin = true;
    
      res.sendFile(__dirname+"/logedin.html");
      
  
    
  }
});
 
// Logout endpoint
app.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("logout success!");
});
 
// Get content endpoint
app.get('/index', auth, function (req, res) {
    res.sendFile(__dirname+"/index.html");
    
});
 
app.listen(3000);
app.use(express.static("public"))
console.log("app running at http://localhost:3000");

