import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import logo_image from '../images/logo.jpg';

class Navigation extends Component {
    render() {
        return (
            <Navbar expand="lg" style={{ backgroundColor: 'white' }}>
                <Navbar.Brand>
                    <img
                        alt=""
                        src={logo_image}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    Hospital Azalea
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    {this
                        .props
                        .routes
                        .map((link, index) =>
                            <Nav.Link
                                key={index}
                                as={link.as}
                                to={link.to}>{link.name}
                            </Nav.Link>)}
                    <NavDropdown title="User" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Notifications</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Appointments</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Medical Records</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Login</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;