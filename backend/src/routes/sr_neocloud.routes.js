module.exports = (app) => {
    const cloudrequests = require('../controllers/sr_neocloud.controller.js');

    // Retrieve all Service Request for Neoload Cloud...
    app.get('/cloudrequests', cloudrequests.findAll);

    // // Retrieve single Service Request for Neoload Cloud... with requestId
    // app.get('/cloudrequests/:cloudrequestsId', cloudrequests.findOne);

    // Create new Service Request for Neoload Cloud...
    app.post('/cloudrequests', cloudrequests.create);

    // // Update single Service Request for Neoload Cloud... with requestId
    // app.put('/cloudrequests/:cloudrequestsId', cloudrequests.update);

    // // Delete a Service Request for Neoload Cloud... with requestId
    // app.delete('/cloudrequests/:cloudrequestsId', cloudrequests.delete);
}