import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Home, IndexContacts, IndexServiceRequests, CreateContact, CreateServiceRequest, EditContact, EditServiceRequest } from './components' //Refactor
import Home from './components/home.component';
import IndexContacts from './components/index-contacts.component';
import IndexServiceRequests from './components/index-servicerequests.component';
import CreateContact from './components/create-contact.component';
import CreateServiceRequest from './components/create-servicerequest.component';
import EditContact from './components/edit-contact.component';
import EditServiceRequest from './components/edit-servicerequest.component';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href={'/'}>EPT Service Request</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href={'/'}>Home</Nav.Link>
                    <NavDropdown title="Display" id="basic-nav-dropdown">
                        <NavDropdown.Item href={'/indexContacts'}>Contacts</NavDropdown.Item>
                        <NavDropdown.Item href={'/indexServiceRequests'}>Display Service Request</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#display/3.4">Displays</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Add" id="basic-nav-dropdown">
                        <NavDropdown.Item href={'/createContact'}>Create Contact</NavDropdown.Item>
                        <NavDropdown.Item href={'/createServiceRequest'}>Create Service Request</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#add/3.4">Create</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/indexContacts' component={ IndexContacts } />
                    <Route exact path='/createContact' component={ CreateContact } />
                    <Route exact path='/createServiceRequest' component={ CreateServiceRequest } />
                    <Route exact path='/editContact/:id' component={ EditContact } />
                    <Route exact path='/editServiceRequest/:id' component={ EditServiceRequest } />
                    <Route exact path='/indexContacts' component={ IndexContacts } />
                    <Route exact path='/indexServiceRequests' component={ IndexServiceRequests } />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default App;