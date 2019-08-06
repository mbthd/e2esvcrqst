// contacts.component.js

// Base Component
// import React, { Component } from 'react';

// export default class Contacts extends Component {
//     render() {
//         return (
//             <div>
//                 <p>Welcome to Contacts Component!!</p>
//             </div>
//         )
//     }
// }

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
            <Link to={"/edit/"+props.contact._id}>Edit</Link>
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
        .then(response => {
            this.setState({ contacts: response.data });
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
                <table className="table table-striped" style={{ marginTop: 20 }} >
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