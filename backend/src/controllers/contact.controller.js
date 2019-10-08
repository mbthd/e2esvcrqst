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
    .then(contact => {
        res.status(200).json({'Contact': 'Contact added successfully'});
    })
    .catch(err => {
        res.status(400).send("Controller: Unable to save Contact to the DB.");
        });
    };

// Retrieve and return all contacts from DB
exports.findAll = (req, res) => {
    Contact.find()
    .then(contacts => {
        res.send(contacts);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Controller: Error occurred while retrieving contacts."
        });
    });
};

// Find single contact with contactId
exports.findOne = (req, res) => {
    Contact.findById(req.params.contactId)
    .then(contact => {
        if(!contact) {
            return res.status(404).send({
                message: "Controller: Contact not found with id " + req.params.contactId
            });
        }
        res.send(contact);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Controller: Contact not found with id " + req.params.contactId
            });
        }
        return res.status(500).send({
            message: "Controller: Error retrieving contact with id " + req.params.contactId
        });
    });
};
// Defined Edit route 
exports.edit = (req, res) => {
    Contact.findById(req.params.contactId)
    .then(contact => {
        if(!contact) {
            return res.status(404).send({
                message: "Controller: Contact not found with id " + req.params.contactId
            });
        }
        res.send(contact);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Controller: Contact not found with id " + req.params.contactId
            });
        }
        return res.status(500).send({
            message: "Controller: Error retrieving contact with id " + req.params.contactId
        });
    });
};
//     })
// }
// Update contact identified by the contactId in the request https://appdividend.com/2018/11/11/react-crud-example-mern-stack-tutorial/#11_Edit_and_Update_Functionality
exports.update = (req, res) => {
    // Find Contact and Update it with the request body
    Contact.findByIdAndUpdate(req.params.contactId, {
        full_name: req.body.full_name,
        ldap: req.body.ldap,
        email: req.body.email
//     }, {new: true})
//     .then(contact => {
//         if(!contact) {
//             return res.status(404).send({
//                 message: "Controller: Contact not found with id " + req.params.contactId
//             });
//         }
//         res.send(contact);
//     }).catch(err => {
//         if(err.kind === 'ObjectId') {
//             return res.status(404).send({
//                 message: "Controller: Contact not found with id " + req.params.contactId
//             });
//         }
//         return res.status(500).send({
//             message: "Controller: Error updating contact with id " + req.params.contactId
//         });
//     });
// };
});
// Save Contact in the DB
        contact.save()
        .then(contact => {
            res.status(200).json({'Contact': 'Contact updated successfully'});
        })
        .catch(err => {
            res.status(400).send("Controller: Unable to update Contact in the DB.");
            });
    };

// Delete contact with specified contactId in the request
exports.delete = (req, res) => {
    Contact.findByIdAndDelete(req.params.contactId)
    .then(contact => {
        if(!contact) {
            return res.status(404).send({
                message: "Controller: Contact not found with id " + req.params.contactId
            });
        }
        res.send({message: "Controller: Contact deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Controller: Contact not found with id " + req.params.contactId
            });
        }
        return res.status(500).send({
            message: "Controller: Could not delete Contact with id " + req.params.contactId
        });
    });
};