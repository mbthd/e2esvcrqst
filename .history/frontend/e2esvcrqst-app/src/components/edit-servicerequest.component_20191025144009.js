// edit-servicerequest.component.js

import React, { Component } from 'react';
import axios from 'axios';

export default class EditServiceRequest extends Component {
//     render() {
//         return (
//             <div>
//                 <p>Welcome to Edit Service Request Component!!</p>
//             </div>
//         )
//     }
// }
constructor(props) {
    super(props);
    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangeLdap = this.onChangeLdap.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeSapId = this.onChangeSapId.bind(this);
    this.onChangeApplicationName = this.onChangeApplicationName.bind(this);
    this.onChangeExperienceName = this.onChangeExperienceName.bind(this);
    this.onChangeSubExpName = this.onChangeSubExpName.bind(this);
    this.onChangeApplicationDeployed = this.onChangeApplicationDeployed.bind(this);
    this.onChangeApplicationConsumer = this.onChangeApplicationConsumer.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        full_name: '',
        ldap: '',
        email: '',
        sapid: '',
        application_name: '',
        experience_name: '',
        sub_exp_name: '',
        application_deployed: '',
        application_consumer: ''
    }
}

componentDidMount() {
    axios.get('http://localhost:4000/servicerequest/edit/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
                full_name: response.data.full_name, 
                ldap: response.data.ldap,
                email: response.data.email 
});
        })
        .catch((error) => {
            console.log(error);
        })
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
    alert('Contact was updated successfully: ' + this.state.full_name);
    const obj = {
        full_name: this.state.full_name,
        ldap: this.state.ldap,
        email: this.state.email
    };
    axios.put('http://localhost:4000/contact/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
}

render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Contact</h3>
            <form onSubmit={this.onSubmit}>
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
            <div className="form-group">
                <input type="submit" 
                    value="Update Contact" 
                    className="btn btn-primary"/>
                </div>
            </form>
        </div>
        )
    }
}