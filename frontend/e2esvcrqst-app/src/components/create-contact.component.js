// create-contact.component.js

    // https://appdividend.com/2018/11/11/react-crud-example-mern-stack-tutorial/#3_Create_the_bootstrap_form
    // section #4 - 8 for form submission to backend 

import React, { Component } from 'react';

export default class CreateContact extends Component {
    render() {
        return (
            <div style={{marginTop: 10, marginLeft:5}}>
                {/* <h6>Welcome to Create Contact Component!!</h6> */}
                <h7>Add New Contact</h7>
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
                        <input type="submit" value="Create Contact" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}