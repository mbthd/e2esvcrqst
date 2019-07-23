var express = require('express');
var bodyParser = require('body-parser');

// create express app...
const app = express();

// parse request of content-type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}))

// parse request of content-type - application/json
app.use(bodyParser.json())

// db config --
// Configuring DB
var dbConfig = require('../config/database.config');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// Connecting to DB
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Existing now...', err);
    process.exit();
});

// define simple route for dev
app.get('/', (req, res) => {
    res.send("Welcome to the E2E Service Request App Backend using Nodejs Express");
});

// Routes included in Express server
require('./routes/contact.routes')(app);

// listen for request
app.listen(3000, () => {
    console.log("Express Server is listening on port 3000");
});