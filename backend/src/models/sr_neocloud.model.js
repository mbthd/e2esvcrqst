// Create Contact model

var mongoose = require('mongoose');


const ServiceRequestSchema = mongoose.Schema({
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
    timestamps: true
});

module.exports = mongoose.model('ServiceRequest', ServiceRequestSchema);