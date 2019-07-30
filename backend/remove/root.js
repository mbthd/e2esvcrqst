const Contact = require('../models/contactgql');

module.exports = {
  listContacts() {
    return Contact.find();
  },
  createContact(input) {
    const newContact = new Contact(input);
    return newContact.save();
  },
  updateContact(input) {
    const { id, ...rest } = input;
    return Contact.findByIdAndUpdate(id, { $set: rest }, { new: true }).catch(
      err => console.error(err)
    );
  },
  deleteContact({ id }) {
    return Contact.findByIdAndDelete(id)
      .then(event => event.remove())
      .then(() => `${id} successfully deleted`)
      .catch(err => console.error(err));
  }
};