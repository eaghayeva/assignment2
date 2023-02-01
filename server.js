/*********************************************************************************
*  WEB322 – Assignment 02
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part *  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Emiliya Aghayeva Student ID: __148398217____________ Date: ________29 January,2023se________
*
*  Online (Cyclic) Link: ________________________________________________________
*
********************************************************************************/ 

var blogService = require('blog-service')
var HTTP_PORT = process.env.PORT || 8080;
var express = require('express');
var app = express();


app.get('/', (req, res) => {
  res.redirect('/about');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
});
function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
  }

  

  

app.listen(HTTP_PORT, onHttpStart); 
