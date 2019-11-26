// servicerequest.route.js
// #8
// section #4 - 8 for form submission to backend 

const express = require('express');
const serviceRequestRoutes = express.Router();

// Require Service Request model in routes module
let serviceRequest = require('../models/servicerequest.model');

//Defined store route
serviceRequestRoutes.route('/add').post((req, res) => {
    let servicerequest = new serviceRequest(req.body);
    servicerequest.save()
        .then(servicerequest => {
            res.status(200).json({'servicerequest': 'Service Request has been added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to the database");
        });
});

// Defined get Data(index or listing) route
serviceRequestRoutes.route('/').get((req, res) => {
    serviceRequest.find((err, servicerequests) => {
        if(err){
            console.log(err);
        }
        else {
            res.json(servicerequests);
        }
    });
});

// Defined edit route
serviceRequestRoutes.route('/editServiceRequest/:id').get((req, res) => {
    let id = req.params.id;
    serviceRequest.findById(id, (err, servicerequest) => {
        res.json(servicerequest);
    });
});

// Defined update route
serviceRequestRoutes.route('/update/:id').put((req, res) => {
    serviceRequest.findById(req.params.id, (err, servicerequest) => {
        if (!servicerequest)
            res.status(404).send("Service Request not found");
        else {
            servicerequest.full_name = req.body.full_name;
            servicerequest.ldap = req.body.ldap;
            servicerequest.email = req.body.email;
            servicerequest.sapid = req.body.sapid;
            servicerequest.application_name = req.body.application_name;
            servicerequest.experience_name = req.body.experience_name;
            servicerequest.sub_exp_name = req.body.sub_exp_name;
            servicerequest.application_deployed = req.body.application_deployed;
            servicerequest.application_consumer = req.body.application_consumer;
            
            servicerequest.save().then(servicerequest => {
                res.json('Service Request has been updated');
            })
            .catch(err => {
                res.status(400).send("Unable to update the Service Request")
            });
        }
    });
});

// Defined delete | remove | destroy route
serviceRequestRoutes.route('/delete/:id').get((req, res) => {
    serviceRequest.findByIdAndRemove({_id: req.params.id}, (err, servicerequest) => {
        if(err) res.json(err);
        else res.json('Service Request Successfully removed');
    });
});

module.exports = serviceRequestRoutes;