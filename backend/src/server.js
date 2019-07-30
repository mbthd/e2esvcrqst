const express = require('express');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');

// create express app...
const app = express();

// parse request of content-type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}))

// parse request of content-type - application/json
// app.use(bodyParser.json())
app.use(express.json());

// db config --
// Configuring DB
var dbConfig = require('../config/database.config');
mongoose.Promise = global.Promise;
// Connecting to DB
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useCreateIndex: true
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

// Use Routes
require('./routes/contact.routes')(app);
require('./routes/sr_neocloud.routes')(app);

// listen for request
app.listen(3000, () => {
    console.log("Express Server is listening on port 3000");
});