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
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                                {/* <a class="nav-item nav-link" href="/contacts">Display Contacts</a> */}
                                <Link to={'/contacts'} className="nav-item nav-link">Display Contacts</Link>
                                <a className="nav-item nav-link" href="/createcontact">Add Contact</a>
                                <a className="nav-item nav-link" href="/editcontact/:id">Edit Contact</a>
                            </div>
                            <div className="navbar-nav">
                                <a className="nav-item nav-link" href="/servicerequests">Display Service Request</a>
                                <a className="nav-item nav-link" href="/createservice">Add Service Request</a>
                                <a className="nav-item nav-link" href="/editservice/:id">Edit Service Request</a>
                            </div>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/contacts' component={Contacts} />
                        <Route path='/createcontact' component={CreateContact} />
                        <Route path='/editcontact/:id' component={EditContact} />
                        <Route exact path='/servicerequests' component={ServiceRequests} />
                        <Route path='/createservice' component={CreateServiceRequest} />
                        <Route path='/editservice/:id' component={EditServiceRequest} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;