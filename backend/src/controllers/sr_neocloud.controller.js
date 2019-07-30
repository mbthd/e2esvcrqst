var CloudRequest = require('../models/sr_neocloud.model');

// Create and Save new Cloud Request...
exports.create = (req, res) => {
    const cloudrequest = new CloudRequest({
        full_name: req.body.full_name,
        ldap: req.body.ldap || "Cant be empty",
        email: req.body.email,
        sapid: req.body.sapid,
        application_name: req.body.application_name,
        experience_name: req.body.experience_name,
        sub_exp_name: req.body.sub_exp_name,
        application_deployed: req.body.application_deployed,
        application_consumer: req.bodyapplication_consumer
    });
    // Save Cloud Request in the DB
    cloudrequest.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Controller - Error occurred while creating the Cloud Request."
        });
    });
};

// Retrieve and return all Cloud Request from DB
exports.findAll = (req, res) => {
    CloudRequest.find()
    .then(cloudrequests => {
        res.send(cloudrequests);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Controller - Error occurred while retrieving Cloud Request."
        });
    });
};

// Find single contact with contactId
exports.findOne = (req, res) => {
    CloudRequest.findById(req.params.cloudrequestId)
    .then(cloudrequest => {
        if(!cloudrequest) {
            return res.status(404).send({
                message: "Controller - Cloud Request not found with id " + req.params.cloudrequestId
            });
        }
        res.send(cloudrequest);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Controller - Cloud Request not found with id " + req.params.cloudrequestId
            });
        }
        return res.status(500).send({
            message: "Controller - Error retrieving Cloud Request with id " + req.params.cloudrequestId
        });
    });
};

// // Update contact identified by the contactId in the request
// exports.update = (req, res) => {

// };

// // Delete contact with specified cloudrequestId in the request
exports.delete = (req, res) => {
    CloudRequest.findByIdAndRemove(req.params.cloudrequestId)
    .then(cloudrequest => {
        if(!cloudrequest) {
            return res.status(404).send({
                message: "Controller - Neoload Cloud Request not found with id " + req.params.cloudrequestId
            });
        }
        res.send({message: "Controller - Neoload Cloud Request deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Controller - Neoload Cloud Request not found with id " + req.params.cloudrequestId
            });
        }
        return res.status(500).send({
            message: "Controller - Could not delete Neoload Cloud Request with id " + req.params.cloudrequestId
        });
    });
};