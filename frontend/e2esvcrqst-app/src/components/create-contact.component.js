// create-contact.component.js



import React, { Component } from 'react';
import axios from 'axios';
import * as emailjs from 'emailjs-com';


export default class CreateContact extends Component {
    //Posting form - props, state
    constructor(props) {
        super(props);
        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeLdap = this.onChangeLdap.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            full_name: '',
            ldap: '',
            email: ''
        }
    }
    onChangeFullName(e) {
        this.setState({
            full_name: e.target.value
        });
    }
    onChangeLdap(e) {
        this.setState({
            ldap: e.target.value
        })
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        alert('Contact was added successfully: ' + this.state.full_name);
        const newContact = {
            full_name: this.state.full_name,
            ldap: this.state.ldap,
            email: this.state.email
        };
        axios.post('http://localhost:4000/contacts', newContact)
            .then(res => console.log(res.data));
        
        //email state
        let emailjsParams = {
            from_name: this.state.full_name + ' (' + this.state.email + ')',
            to_name: 'neoload_support@homedepot.com',
            full_name: this.state.full_name,
            ldap: this.state.ldap,
            email: this.state.email
            }

        // emailjs function..
        emailjs.send('sendgrid', 'template_395j6fzQ', emailjsParams, 'user_RN5rmXQV3LQvbmzJodocs')
            .then((res) => {
                console.log('Success!', res.status, res.text);
            }, (err) => {
                console.log('Failed...', err);
            });

        this.setState({
            full_name: '',
            ldap: '',
            email: ''
        })
    }
    render() {
        return (
            <div style={{marginTop: 10, marginLeft:5}}>
                {/* <h6>Welcome to Create Contact Component!!</h6> */}
                <h7>Add New Contact</h7>
                <br />
                    <form id="addContact" onSubmit={this.onSubmit}>
                <br />
                    <div className="form-group">
                        <label>Full Name: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.full_name}
                        onChange={this.onChangeFullName}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Ldap: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.ldap}
                        onChange={this.onChangeLdap}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        />
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