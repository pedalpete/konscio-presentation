var express = require('express');
var app = express();


app.get('/', function(req,res){
	res.sendfile('index.html');
});

app.use("/css", express.static(__dirname + '/css'));
app.use("/lib", express.static(__dirname + '/lib'));
app.use("/plugin", express.static(__dirname + '/plugin'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/images", express.static(__dirname + '/images'));
app.listen(process.env.PORT || 4730);

	