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

// Defined edit route
contactRoutes.route('/edit/:id').get((req, res) => {
    let id = req.params.id;
    Contact.findById(id, (err, contact) => {
        res.json(contact);
    });
});

// Defined update route
contactRoutes.route('/update/:id').post((req, res) => {
    Contact.findById(req.params.id, (err, contact) => {
        if (!contact)
            res.status(404).send("Contact not found");
        else {
            contact.full_name = req.body.full_name;
            contact.ldap = req.body.ldap;
            contact.email = req.body.email;

            contact.save().then(contact => {
                res.json('Contact has been updated');
            })
            .catch(err => {
                res.status(400).send("Unable to update the Contact")
            });
        }
    });
});

// Defined delete | remove | destroy route
contactRoutes.route('/delete/:id').get((req, res) => {
    Contact.findByIdAndRemove({_id: req.params.id}, (err, contact) => {
        if(err) res.json(err);
        else res.json('Contact Successfully removed');
    });
});

module.exports = contactRoutes;