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
    axios.get('http://localhost:4000/servicerequest/editServiceRequest/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
                full_name: response.data.full_name, 
                ldap: response.data.ldap,
                email: response.data.email,
                sapid: response.data.sapid,
                application_name: response.data.application_name,
                experience_name: response.data.experience_name,
                sub_exp_name: response.data.sub_exp_name,
                application_deployed: response.data.application_deployed,
                application_consumer: response.data.application_consumer
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
onChangeSapId(e) {
    this.setState({
        sapid: e.target.value
    });
}
onChangeApplicationName(e) {
    this.setState({
        application_name: e.target.value
    })
}
onChangeExperienceName(e) {
    this.setState({
        experience_name: e.target.value
    })
}
onChangeSubExpName(e) {
    this.setState({
        sub_exp_name: e.target.value
    });
}
onChangeApplicationDeployed(e) {
    this.setState({
        application_deployed: e.target.value
    })
}
onChangeApplicationConsumer(e) {
    this.setState({
        application_consumer: e.target.value
    })
}
onSubmit(e) {
    e.preventDefault();
    alert('Service Request was updated successfully: ' + this.state.full_name);
    const obj = {
        full_name: this.state.full_name,
        ldap: this.state.ldap,
        email: this.state.email,
        sapid: this.state.sapid,
        application_name: this.state.application_name,
        experience_name: this.state.experience_name,
        sub_exp_name: this.state.sub_exp_name,
        application_deployed: this.state.application_deployed,
        application_consumer: this.state.application_consumer
    };
    axios.put('http://localhost:4000/servicerequest/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    // this.props.history.push('/index');
    this.props.history.push('/indexServiceRequests');
}

render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Service Request</h3>
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
            <br />
            <div className="form-group">
                <label>Sapid: </label>
                <input type="text" 
                className="form-control"
                value={this.state.sapid}
                onChange={this.onChangeSapId}
                />
            </div>
            <br />
            <div className="form-group">
                <label>Application Name: </label>
                <input type="text" 
                className="form-control"
                value={this.state.application_name}
                onChange={this.onChangeApplicationName}
                />
            </div>
            <br />
            <div className="form-group">
                <label>Experience Name: </label>
                <input type="text" 
                className="form-control"
                value={this.state.experience_name}
                onChange={this.onChangeExperienceName}
                />
            </div>
            <br />
            <div className="form-group">
                <label>Sub Experience Name: </label>
                <input type="text" 
                className="form-control"
                value={this.state.sub_exp_name}
                onChange={this.onChangeSubExpName}
                />
            </div>
            <br />
            <div className="form-group">
                <label>Application Deployed: </label>
                <input type="text" 
                className="form-control"
                value={this.state.application_deployed}
                onChange={this.onChangeApplicationDeployed}
                />
            </div>
            <br />
            <div className="form-group">
                <label>Application Consumer: </label>
                <input type="text" 
                className="form-control"
                value={this.state.application_consumer}
                onChange={this.onChangeApplicationConsumer}
                />
            </div>
            <br />
            <div className="form-group">
                <input type="submit" 
                    value="Update Service Request" 
                    className="btn btn-primary"/>
                </div>
            </form>
        </div>
        )
    }
}