// App.js


import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
                <div style={{width: '100em', height: '50em', overflow: 'scroll', margin: 'auto'}}>
                    <h2>Welcome to the E2E Team Service Request Application!!</h2>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <div class="navbar-nav">
                                <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
                                {/* <a class="nav-item nav-link" href="/contacts">Display Contacts</a> */}
                                <Link to={'/contacts'} class="nav-item nav-link">Display Contacts</Link>
                                <a class="nav-item nav-link" href="/createcontact">Add Contact</a>
                                <a class="nav-item nav-link" href="/editcontact/:id">Edit Contact</a>
                            </div>
                            <div class="navbar-nav">
                                <a class="nav-item nav-link" href="/servicerequests">Display Service Request</a>
                                <a class="nav-item nav-link" href="/createservice">Create Service Request</a>
                                <a class="nav-item nav-link" href="/editservice/:id">Edit Service Request</a>
                            </div>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/contacts' component={Contacts} />
                        <Route path='/createcontact' component={CreateContact} />
                        <Route exact path='/editcontact/:id' component={EditContact} />
                        <Route exact path='/servicerequests' component={ServiceRequests} />
                        <Route path='/createservice' component={CreateServiceRequest} />
                        <Route exact path='/editservice/:id' component={EditServiceRequest} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;