// require packages
var express = require('express');
var mysql = require('mysql');


var PORT = procces.env.PORT || 8080;

var app = express();

// Parse application body as JSON, Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Set handlebars
var handlebars = require('express-handlebars');
app.engine("handlebars", handlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

