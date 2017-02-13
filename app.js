// its where all story starts
'use strict';
var express = require('express');
var app = express();

app.listen(8080, function(){
    console.log('app server started at %d',8080);
});


//static files are loaded here
app.use(express.static('public'));
app.use('/css',express.static(__dirname+'/node_modules/bootstrap/dist/css'));
app.use('/js',express.static(__dirname+'/node_modules/bootstrap'));
app.use('/main',express.static(__dirname+'/main/'));
app.use('/angular',express.static(__dirname+'/node_modules/angular'));

//middleware routing config

app.get('/',function(req,res){
    res.sendfile('./public/html/index.html'); 
});

app.post('/getSearchResults',function(req,res){
    console.log('inside node js pot function');
});