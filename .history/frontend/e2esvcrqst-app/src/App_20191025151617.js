// App.js
// Multiple axios api calls in same componentDidMount, rendering multiple components
//  https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios
//  https://stackoverflow.com/questions/45795179/axios-multiple-requests-in-react
//  https://alligator.io/react/axios-react/
//  https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index
// Rendering diff content based on if/then content
//  https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e/
// Change button nav to dropdown nav
//  https://getbootstrap.com/docs/4.0/components/forms/
//  see notes from 10/25/19



import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/home.component';
import CreateContact from './components/create-contact.component';
import CreateServiceRequest from './components/create-servicerequest.component';
import Edit from './components/edit.component';
import EditServiceRequest from './components/edit-servicerequest.component';
// import Index from './components/index.component';
import IndexContacts from './components/index-contacts.component';
import IndexServiceRequests from './components/index-servicerequests.component';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light-bg-light">
                        <Link to={'/'} className="navbar-brand">Service Request Application</Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/createContact'} className="nav-link">Create Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/createServiceRequest'} className="nav-link">Create Service Request</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/indexContacts'} className="nav-link">Display Contacts</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/indexServiceRequests'} className="nav-link">Display Service Request</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                        <Switch>
                            <Route exact path='/' component={ Home } />
                            <Route path='/createContact' component={ CreateContact } />
                            <Route path='/createServiceRequest' component={ CreateServiceRequest } />
                            <Route path='/edit/:id' component={ Edit } />
                            <Route path='/editSR/:id' component={ EditServiceRequest } />
                            <Route path='/indexContacts' component={ IndexContacts } />
                            <Route path='/indexServiceRequests' component={ IndexServiceRequests } />
                        </Switch>
                    </div>
            </Router>
        );
    }
}

export default App;