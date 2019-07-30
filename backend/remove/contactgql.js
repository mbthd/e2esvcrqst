// Create Contactgql model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ContactgqlSchema = new mongoose.Schema({
    id: String,
    full_name: String,
    ldap: String,
    email: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Contactgql', ContactgqlSchema);