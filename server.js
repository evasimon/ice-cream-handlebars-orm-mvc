// npm packages required / dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var iceCreamController = require('./controllers/ice_cream_controller');
var path = require('path');


// sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// serves static files from the css folder
app.use('/assets', express.static(path.join(__dirname + '/public/assets')));

iceCreamController(app);

// listenes on port
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});