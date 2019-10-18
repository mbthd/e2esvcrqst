// contact.route.js
// #8
// https://appdividend.com/2018/11/11/react-crud-example-mern-stack-tutorial/#3_Create_the_bootstrap_form
// section #4 - 8 for form submission to backend 

const express = require('express');
const contactRoutes = express.Router();

// Require Contact model in routes module
let Contact = require('../models/contact.model');

//Defined store route
contactRoutes.route('/add').post((req, res) => {
    let contact = new Contact(req.body);
    contact.save()
        .then(contact => {
            res.status(200).json({'contact': 'contact has been added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to the database");
        });
});

// Defined get Data(index or listing) route
contactRoutes.route('/').get((req, res) => {
    Contact.find((err, contacts) => {
        if(err){
            console.log(err);
        }
        else {
            res.json(contacts);
        }
    });
});

// Define edit, update, delete routes

module.exports = contactRoutes;

// module.exports = (app) => {
//     const contacts = require('../controllers/contact.controller.js');

//     // Retrieve all Contacts
//     app.get('/contacts', contacts.findAll);

//     // Retrieve single Contact with contactId
//     // app.get('/contacts/:contactId', contacts.findOne);
//     app.get('/edit/:id', contacts.findOne);

//     // Create new Contact...
//     app.post('/contacts', contacts.create);

//     // Update single Contact with contactId
//     app.put('/contacts/:contactId', contacts.update);

//     // Delete a Contact with contactId
//     app.delete('/contacts/:contactId', contacts.delete);
// }