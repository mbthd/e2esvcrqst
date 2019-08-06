// App.js
// https://appdividend.com/2018/11/11/react-crud-example-mern-stack-tutorial/#3_Create_the_bootstrap_form

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/home.component';
import Contacts from './components/contacts.component';
import CreateContact from './components/create-contact.component';
import EditContact from './components/edit-contact.component';
import ServiceRequests from './components/servicerequests.component';
import CreateServiceRequest from './components/create-servicerequest.component';
import EditServiceRequest from './components/edit-servicerequest.component';

class App extends Component {
    render() {
        return (
            <Router>
                <div style={{width: '50em', height: '25em', overflow: 'scroll', margin: 'auto'}}>
                    <h2>Welcome to the E2E Team Service Request Application!!</h2>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <h3><Link to={'/'}> Home </Link></h3>
                    <hr />
                    <ul className="navbar-nav mr-auto">
                        <li><Link to={'/contacts'}> Contacts </Link></li>
                        <li><Link to={'/createcontact'}> Create Contact </Link></li>
                        <li><Link to={'/editcontact/:id'}> Edit Contact </Link></li>
                    </ul>
                    <br />
                    <ul className="navbar-nav mr-auto">
                        <li><Link to={'/servicerequests'}> Service Request </Link></li>
                        <li><Link to={'/createservice'}> Create Service Request </Link></li>
                        <li><Link to={'/editservice/:id'}> Edit Service Request </Link></li>
                    </ul>
                    </nav>
                    <hr />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/contacts' component={Contacts} />
                        <Route exact path='/createcontact' component={CreateContact} />
                        <Route exact path='/editcontact/:id' component={EditContact} />
                        <Route exact path='/servicerequests' component={ServiceRequests} />
                        <Route exact path='/createservice' component={CreateServiceRequest} />
                        <Route exact path='/editservice/:id' component={EditServiceRequest} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;