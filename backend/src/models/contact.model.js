// Create Contact model
var mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    fullName: String,
    ldap: String,
    email: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Contact', ContactSchema);