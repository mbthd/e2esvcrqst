// servicerequest.model.js 
// #8

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Service Request model
let serviceRequest = new Schema({
    full_name: String,
    ldap: String,
    email: String,
    sapid: String,
    application_name: String,
    experience_name: String,
    sub_exp_name: String,
    application_deployed: String,
    application_consumer: String
    }, {
        timestamps: true,
        collection: 'servicerequest'
    });

module.exports = mongoose.model('serviceRequest', serviceRequest);

