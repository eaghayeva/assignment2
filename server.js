/*********************************************************************************
*  WEB322 – Assignment 02
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part *  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Emiliya Aghayeva Student ID: __148398217____________ Date: ________03 February,2023________
*
*  Online (Cyclic) Link: ________________________________________________________
*
********************************************************************************/ 


var express = require('express');
var app = express();
var path = require("path");
var blogService = require("./blog-service");

var HTTP_PORT = process.env.PORT || 8080;

function onHttpStart(){
  console.log("Express http server listening on:  "+ HTTP_PORT);
}

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/about');
});

app.get("/about",function(req,res){
  res.sendFile(path.join(__dirname,"/views/about.html"));
});


app.get("/blog", function(req, res) {
  blogService.getPublishedPosts()
  .then((posts) => {
      res.send(posts);
  })
  .catch((err) => {
    res.send({message: err});
  });
});

app.get("/posts", function(req, res) {
  blogService.getAllPosts()
  .then((posts) => {
      res.send(posts);
  })
  .catch((err) => {
      res.send({message: err});
      
  });
});

app.get("/categories", function(req, res) {
  blogService.getCategories()
  .then((categories) => {
  res.send(categories);
  })
  .catch((err) => {
    res.send({message: err});
  });
});

app.get("*",(req,res)=>{
  res.status(404).send("Page not found");
})  // if no matching route is found default to 404 with message "Page Not Found"



blogService.initialize().then(()=>{
  app.listen(HTTP_PORT,onHttpStart);

}).catch(()=>{
  console.log("error");
});