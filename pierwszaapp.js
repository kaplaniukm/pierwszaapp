var express = require('express');

var app = express();

app get('/', function(req, res) {
	res.send('DevOps - strona startowa');
	console.log('Zażądano strony start');
});

app get('/users', function(req, res){
	res.send('DevOps - strona users');
	console.log('Zażądano strony users');
});

app.listen(3001, function(){
	console.log("aplikacja DevOps OK');
});