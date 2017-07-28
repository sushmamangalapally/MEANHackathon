var express  = require( 'express' );
var bp = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var root = __dirname
var app = express();
var port = 8000;
app.use(bp.urlencoded({ extended: true }));

app.use( express.static('../DressApp/dist' ));
app.use(bp.json())

require('./config/db.js');
require('./config/routes.js')(app);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

app.listen( port, function() {
  console.log( "server running on " + port);
});
