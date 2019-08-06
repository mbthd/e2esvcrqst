// servicerequests.component.js

// import React, { Component } from 'react';

// export default class ServiceRequests extends Component {
//     render() {
//         return (
//             <div>
//                 <p>Welcome to Service Request Component!!</p>
//             </div>
//         )
//     }
// }

// Display mongo data in Component
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 


const ServiceRequest = props => (
    <tr>
        <td>{props.servicerequest.full_name}</td>
        <td>{props.servicerequest.ldap}</td>
        <td>{props.servicerequest.email}</td>
        <td>{props.servicerequest.sapid}</td>
        <td>{props.servicerequest.applicastion_name}</td>
        <td>{props.servicerequest.experience_name}</td>
        <td>{props.servicerequest.sub_exp_name}</td>
        <td>{props.servicerequest.application_deployed}</td>
        <td>{props.servicerequest.application_consumer}</td>
        <td>
            <Link to={"/edit/"+props.servicerequest._id}>Edit</Link>
        </td>
    </tr>
)

export default class ServiceRequests extends Component {

    constructor(props) {
        super(props);
        this.state = {servicerequests: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/cloudrequests/')
        .then(response => {
            this.setState({ servicerequests: response.data });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    servicerequest() {
        return this.state.servicerequests.map((currentServiceRequest, i) => {
            return <ServiceRequest servicerequest={currentServiceRequest} key={i} />
        })
    }

    render() {
        return (
            <div>
                <h3 align="center">Service Request List</h3>
                <table className="table table-striped" style={{ width: '100em', height: '5em', overflow: 'scroll', margin: 'auto' }} >
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Ldap</th>
                            <th>Email</th>
                            <th>Sapid</th>
                            <th>application_name</th>
                            <th>experience_name</th>
                            <th>sub_exp_name</th>
                            <th>application_deployed</th>
                            <th>application_consumer</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.servicerequest() }
                    </tbody>
                </table>
            </div>
        )
    }
}