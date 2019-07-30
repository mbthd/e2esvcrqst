var Contact = require('../models/contact.model');

// Create and Save new contact...
exports.create = (req, res) => {
    // Create a Contact
    const contact = new Contact({
        full_name: req.body.full_name,
        ldap: req.body.ldap || "Cant be empty",
        email: req.body.email
    });
    // Save Contact in the DB
    contact.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Controller - Error occurred while creating the Contact."
        });
    });
};

// Retrieve and return all contacts from DB
exports.findAll = (req, res) => {
    Contact.find()
    .then(contacts => {
        res.send(contacts);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Controller - Error occurred while retrieving contacts."
        });
    });
};

// Find single contact with contactId
exports.findOne = (req, res) => {
    Contact.findById(req.params.contactId)
    .then(contact => {
        if(!contact) {
            return res.status(404).send({
                message: "Controller - Contact not found with id " + req.params.contactId
            });
        }
        res.send(contact);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Controller - Contact not found with id " + req.params.contactId
            });
        }
        return res.status(500).send({
            message: "Controller - Error retrieving contact with id " + req.params.contactId
        });
    });
};

// // Update contact identified by the contactId in the request
// exports.update = (req, res) => {

// };

// // Delete contact with specified contactId in the request
exports.delete = (req, res) => {
    Contact.findByIdAndDelete(req.params.contactId)
    .then(contact => {
        if(!contact) {
            return res.status(404).send({
                message: "Controller - Contact not found with id " + req.params.contactId
            });
        }
        res.send({message: "Controller - Contact deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Controller - Contact not found with id " + req.params.contactId
            });
        }
        return res.status(500).send({
            message: "Controller - Could not delete Contact with id " + req.params.contactId
        });
    });
};