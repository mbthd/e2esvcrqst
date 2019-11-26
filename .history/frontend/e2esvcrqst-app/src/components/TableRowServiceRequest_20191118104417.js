//TableRow.js

import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';


class TableRow extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        }
        delete() {
            axios.get('http://localhost:4000/servicerequest/delete/'+this.props.obj._id)
                .then(console.log('Deleted'))
                .catch(err => console.log(err))
        }
    render() {
        return (
            <BrowserRouter>
                <tr>
                    <td>
                        {this.props.obj.full_name}
                    </td>
                    <td>
                        {this.props.obj.ldap}
                    </td>
                    <td>
                        {this.props.obj.email}
                    </td>
                    <td>
                        {this.props.obj.sapid}
                    </td>
                    <td>
                        {this.props.obj.application_name}
                    </td>
                    <td>
                        {this.props.obj.experience_name}
                    </td>
                    <td>
                        {this.props.obj.sub_exp_name}
                    </td>
                    <td>
                        {this.props.obj.application_deployed}
                    </td>
                    <td>
                        {this.props.obj.application_consumer}
                    </td>
                    <td>
                        {/* <Link to ={"/editServiceRequest/"+this.props.obj._id} className="btn btn-primary">Edit</Link> */}
                        <Link to ={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
                    </td>
                    <td>
                        <button onClick={this.delete} className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </BrowserRouter>
        );
    }
}

export default TableRow;