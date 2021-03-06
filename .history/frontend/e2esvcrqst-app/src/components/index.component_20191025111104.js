// index.component.js
// #10
// Multiple axios api calls in same componentDidMount, rendering multiple components
//  https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios
//  https://stackoverflow.com/questions/45795179/axios-multiple-requests-in-react
//  https://alligator.io/react/axios-react/
//  https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index


import React, { Component } from 'react';
import axios from 'axios';
import TableRow from '../components/TableRow';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {contact: []};
    }
    componentDidMount(){
        axios.get('http://localhost:4000/contact')
            .then(response => {
                this.setState({ contact: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
        }
        tabRow(){
            return this.state.contact.map((object, i) => {
                return <TableRow obj={object} key={i} />;
            });
        }

        render() {
            return (
                <div>
                    <h3 align="center">Contact List</h3>
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Ldap</th>
                                <th>Email</th>
                                <th colSpan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.tabRow() }
                        </tbody>
                    </table>
                </div>
            );
        }
    }
