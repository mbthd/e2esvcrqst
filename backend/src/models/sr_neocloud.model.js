// Create Contact model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CloudRequestSchema = new Schema({
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

module.exports = CloudRequest = mongoose.model('CloudRequest', CloudRequestSchema);