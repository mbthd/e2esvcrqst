// contact.model.js 
// #8

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Contact model
let Contact = new Schema({
    full_name: {
        type: String
    },
    ldap: {
        type: String
    },
    email: {
        type: String
    }
},{
    timestamps: true,
    collection: 'contact'
});

module.exports = mongoose.model('Contact', Contact);

