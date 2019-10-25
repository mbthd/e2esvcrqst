// server.js


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('../db');
const contactRoute = require('./routes/contact.route');
const serviceRequest = require('./routes/servicerequest.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use('/contact', contactRoute);
app.use('/servicerequest', serviceRequest);

app.listen(PORT, () => {
    console.log('Express Server is listening on port:', PORT);
});