    // https://appdividend.com/2018/11/11/react-crud-example-mern-stack-tutorial/#3_Create_the_bootstrap_form
    // section #4 - 8 for form submission to backend 


module.exports = (app) => {
    const servicerequests = require('../controllers/sr_neocloud.controller.js');

    // Retrieve all Service Request for Neoload Cloud Request...
    app.get('/servicerequests', servicerequests.findAll);

    // Retrieve single Service Request for Neoload Cloud Request... with requestId
    app.get('/servicerequests/:servicerequestId', servicerequests.findOne);

    // Create new Service Request for Neoload Cloud Request...
    app.post('/servicerequests', servicerequests.create);

    // Update single Service Request for Neoload Cloud Request... with requestId
    app.put('/servicerequests/:servicerequestId', servicerequests.update);

    // Delete a Service Request for Neoload Cloud Request... with requestId
    app.delete('/servicerequests/:servicerequestId', servicerequests.delete);
}