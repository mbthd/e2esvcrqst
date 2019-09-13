var ServiceRequest = require('../models/sr_neocloud.model');

// Create and Save new Service Request...
exports.create = (req, res) => {
    const servicerequest = new ServiceRequest({
        full_name: req.body.full_name,
        ldap: req.body.ldap || "Cant be empty",
        email: req.body.email,
        sapid: req.body.sapid,
        application_name: req.body.application_name,
        experience_name: req.body.experience_name,
        sub_exp_name: req.body.sub_exp_name,
        application_deployed: req.body.application_deployed,
        application_consumer: req.body.application_consumer
    });
    // Save Service Request in the DB
    servicerequest.save()
    .then(servicerequest => {
        res.status(200).json({'ServiceRequest': 'Service Request added successfully'});
    })
    .catch(err => {
        res.status(400).send("Controller: Unable to save Service Request to the DB.");
        });
    };

// Retrieve and return all Service Request from DB
exports.findAll = (req, res) => {
    ServiceRequest.find()
    .then(servicerequests => {
        res.send(servicerequests);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Controller: Error occurred while retrieving Service Request."
        });
    });
};

// Find single contact with contactId
exports.findOne = (req, res) => {
    ServiceRequest.findById(req.params.servicerequestId)
    .then(servicerequest => {
        if(!servicerequest) {
            return res.status(404).send({
                message: "Controller: Service Request not found with id " + req.params.servicerequestId
            });
        }
        res.send(servicerequest);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Controller: Service Request not found with id " + req.params.servicerequestId
            });
        }
        return res.status(500).send({
            message: "Controller: Error retrieving Service Request with id " + req.params.servicerequestId
        });
    });
};

// // Update Service Request identified by the servicerequestId in the request
exports.update = (req, res) => {
    // Find Service Request and Update it with the request body
    ServiceRequest.findByIdAndUpdate(req.params.servicerequestId, {
        full_name: req.body.full_name,
        ldap: req.body.ldap,
        email: req.body.email,
        sapid: req.body.sapid,
        application_name: req.body.application_name,
        experience_name: req.body.experience_name,
        sub_exp_name: req.body.sub_exp_name,
        application_deployed: req.body.application_deployed,
        application_consumer: req.body.application_consumer
    }, {new: true})
    .then(servicerequest => {
        if(!servicerequest) {
            return res.status(404).send({
                message: "Controller: Service Request not found with id " + req.params.servicerequestId
            });
        }
        res.send(servicerequest);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Controller: Service Request not found with id " + req.params.servicerequestId
            });
        }
        return res.status(500).send({
            message: "Controller: Error updating Service Request with id " + req.params.servicerequestId
        });
    });
};

// // Delete contact with specified servicerequestId in the request
exports.delete = (req, res) => {
    ServiceRequest.findByIdAndDelete(req.params.servicerequestId)
    .then(servicerequest => {
        if(!servicerequest) {
            return res.status(404).send({
                message: "Controller: Neoload Service Request not found with id " + req.params.servicerequestId
            });
        }
        res.send({message: "Controller: Neoload Service Request deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Controller: Neoload Service Request not found with id " + req.params.servicerequestId
            });
        }
        return res.status(500).send({
            message: "Controller: Could not delete Neoload Service Request with id " + req.params.servicerequestId
        });
    });
};