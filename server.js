// require packages
var express = require('express');

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

// Parse application body as JSON, Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Set handlebars
var handlebars = require('express-handlebars');
app.engine("handlebars", handlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: " + PORT);
});
