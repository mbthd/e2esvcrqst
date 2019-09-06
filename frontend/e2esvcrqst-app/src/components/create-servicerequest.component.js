// create-servicerequest.component.js

    // https://appdividend.com/2018/11/11/react-crud-example-mern-stack-tutorial/#3_Create_the_bootstrap_form
    // section #4 - 8 for form submission to backend 

import React, { Component } from 'react';


export default class CreateServiceRequest extends Component {
    render() {
        return (
            <div style={{marginTop: 5, marginLeft:5}}>
                {/* <h6>Welcome to Create Service Request Component!!</h6> */}
                <h7>Add New Service Request</h7>
                    <br />
                        <form className="form-group">
                    <br />
                    <div className="form-group">
                        <label>Full Name: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Ldap: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Sapid: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Application Name: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Experience Name: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Sub Experience Name: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Application Deployed: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Application Consumer: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Create Service Request" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}







