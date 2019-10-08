// contacts.component.js


// Display mongo data in Component
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 



const Contact = props => (
    <tr>
        <td>{props.contact.full_name}</td>
        <td>{props.contact.ldap}</td>
        <td>{props.contact.email}</td>
        <td>
            <Link to={"/editcontact/"+props.contact._id} className="btn btn-primary">Edit</Link>
        </td>
        <td>
            <button className="btn btn-danger">Delete</button>
        </td>
    </tr>
)

export default class Contacts extends Component {

    constructor(props) {
        super(props);
        this.state = {contacts: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/contacts/')
        .then(res => {
            this.setState({ contacts: res.data });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    contact() {
        return this.state.contacts.map((currentContact, i) => {
            return <Contact contact={currentContact} key={i} />
        })
    }

    render() {
        return (
            <div>
                <h3 align="center">Contact List</h3>
                <table className="table table-striped" style={{ width: '100em', height: '1em', overflow: 'scroll', margin: 'auto'}} >
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Ldap</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.contact() }
                    </tbody>
                </table>
            </div>
        )
    }
}