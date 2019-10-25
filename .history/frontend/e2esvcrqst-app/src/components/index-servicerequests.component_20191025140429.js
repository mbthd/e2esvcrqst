// index.component.js
// #10
// Multiple axios api calls in same componentDidMount, rendering multiple components
//  https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios
//  https://stackoverflow.com/questions/45795179/axios-multiple-requests-in-react
//  https://alligator.io/react/axios-react/
//  https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index
// render multiple display types based on displays available
//  https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e/
//  Element Variables
//  https://reactjs.org/docs/conditional-rendering.html


import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {servicerequest: [], mode: 'viewServiceRequest'}; //added mode to render contact view versus service request view
    }
    componentDidMount(){
        axios.get('http://localhost:4000/servicerequest')
            .then(response => {
                this.setState({ servicerequest: response.data }); //add axios call for  service request
            })
            .catch((error) => {
                console.log(error);
            })
        }
        tabRowServiceRequest(){ //when implementing dropdown menu, row output for create contact. create for each output (contact, service request)
            return this.state.servicerequest.map((object, i) => {
                return <TableRow obj={object} key={i} />;
            }); //add row output for service request
        }

        render() {
            return ( //render multiple return outputs per content result (contact, service request)
                <div>
                    <h3 align="center">Service Request List</h3>
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Ldap</th>
                                <th>Email</th>
                                <th>SapId</th>
                                <th>Application Name</th>
                                <th>Experience Name</th>
                                <th>Sub Experience Name</th>
                                <th>Application Deployed</th>
                                <th>Application Consumer</th>
                                <th colSpan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.tabRowServiceRequest() }
                        </tbody>
                    </table>
                </div>
            );
        }
    }