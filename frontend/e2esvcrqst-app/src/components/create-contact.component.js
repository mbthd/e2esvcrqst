// create-contact.component.js

// 1. send email to outlook > slack on submit of form
// https://medium.com/@binhchung48/create-a-contact-form-with-nodemailer-react-js-and-express-js-7757d41e2448
// frontend
// https://github.com/binhc/react-nodemailer/blob/master/front-end/src/ContactForm.js
// https://github.com/binhc/react-nodemailer/blob/master/front-end/src/App.js
// backend
// https://github.com/binhc/react-nodemailer/blob/master/back-end/routes/index.js
// https://github.com/binhc/react-nodemailer/blob/master/back-end/app.js
// 2. OR https://tylerkrys.ca/blog/adding-nodemailer-email-contact-form-node-express-app
// https://appdividend.com/2017/08/11/send-email-in-node-js/
// https://github.com/KrunalLathiya/nodemailer/blob/master/server.js
// https://github.com/KrunalLathiya/nodemailer/blob/master/views/index.ejs
// https://www.emailjs.com/docs/
// https://www.emailjs.com/docs/sdk/sendform/
// https://www.npmjs.com/package/emailjs-com
// https://www.graphicsandphotos.com/blog-post/sending-emails-emailjs-react-component-part-threeimplement-code-emailjs-sending-email/


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