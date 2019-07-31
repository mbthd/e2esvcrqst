module.exports = (app) => {
    const contacts = require('../controllers/contact.controller.js');

    // Retrieve all Contacts
    app.get('/contacts', contacts.findAll);

    // Retrieve single Contact with contactId
    app.get('/contacts/:contactId', contacts.findOne);

    // Create new Contact...
    app.post('/contacts', contacts.create);

    // Update single Contact with contactId
    app.put('/contacts/:contactId', contacts.update);

    // Delete a Contact with contactId
    app.delete('/contacts/:contactId', contacts.delete);
}