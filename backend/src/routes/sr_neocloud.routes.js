    // https://appdividend.com/2018/11/11/react-crud-example-mern-stack-tutorial/#3_Create_the_bootstrap_form
    // section #4 - 8 for form submission to backend 


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