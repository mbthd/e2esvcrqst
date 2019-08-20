// create-servicerequest.component.js

import React, { Component } from 'react';

export default class CreateServiceRequest extends Component {
    render() {
        return (
            <div style={{marginTop: 5, marginLeft:5}}>
                {/* <h6>Welcome to Create Service Request Component!!</h6> */}
                <h7>Create New Service Request</h7>
                    <br />
                        <form className="form-group">
                    <br />
                    <div className="form-inline">
                        <label>Full Name: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <br />
                    <div className="form-inline">
                        <label>Ldap: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <br />
                    <div className="form-inline">
                        <label>Email: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <br />
                    <div className="form-inline">
                        <label>Sapid: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <br />
                    <div className="form-inline">
                        <label>Application Name: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <br />
                    <div className="form-inline">
                        <label>Experience Name: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <br />
                    <div className="form-inline">
                        <label>Sub Experience Name: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <br />
                    <div className="form-inline">
                        <label>Application Deployed: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <br />
                    <div className="form-inline">
                        <label>Application Consumer: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <br />
                    <div className="form-inline">
                        <input type="submit" value="Create Service Request" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}







