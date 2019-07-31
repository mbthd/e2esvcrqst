module.exports = (app) => {
    const cloudrequests = require('../controllers/sr_neocloud.controller.js');

    // Retrieve all Service Request for Neoload Cloud Request...
    app.get('/cloudrequests', cloudrequests.findAll);

    // Retrieve single Service Request for Neoload Cloud Request... with requestId
    app.get('/cloudrequests/:cloudrequestId', cloudrequests.findOne);

    // Create new Service Request for Neoload Cloud Request...
    app.post('/cloudrequests', cloudrequests.create);

    // Update single Service Request for Neoload Cloud Request... with requestId
    app.put('/cloudrequests/:cloudrequestId', cloudrequests.update);

    // // Delete a Service Request for Neoload Cloud Request... with requestId
    app.delete('/cloudrequests/:cloudrequestId', cloudrequests.delete);
}