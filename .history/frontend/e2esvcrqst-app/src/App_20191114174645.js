import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home.component';
import IndexContacts from './components/index-contacts.component';


class App extends Component {
    render() {
        return (
            <Router>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">EPT Service Request</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href={'/'}>Home</Nav.Link>
                    {/* <Nav.Link Link to={'/'}>Home</Nav.Link> */}
                    <NavDropdown title="Display" id="basic-nav-dropdown">
                        <NavDropdown.Item href="{'/indexContacts'}">Contacts</NavDropdown.Item>
                        {/* <NavDropdown.Item Link to={'/indexContacts'}>Contacts</NavDropdown.Item> */}
                        <NavDropdown.Item href="#action/3.2">Service Request</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Add" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Contacts</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Service Request</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
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
                            <Route path='/indexContacts' component={ IndexContacts } />
                            {/* <Route path='/createContact' component={ CreateContact } />
                            <Route path='/createServiceRequest' component={ CreateServiceRequest } />
                            <Route path='/editContact/:id' component={ EditContact } />
                            <Route path='/editServiceRequest/:id' component={ EditServiceRequest } />
                            <Route path='/indexContacts' component={ IndexContacts } />
                            <Route path='/indexServiceRequests' component={ IndexServiceRequests } /> */}
                        </Switch>
            </Router>
        )
    }
}
export default App;