var http = require("http");
var express = require("express");
var controllers = require("./controllers");

var app = express();
app.set("view engine","vash");

app.use(express.static(__dirname  + "/public"));

controllers.init(app);

var server = http.createServer(app);

server.listen(2000);
