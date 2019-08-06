// create-contact.component.js

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
                        <input type="submit" value="Create Contact" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}