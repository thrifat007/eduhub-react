import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" className='py-4'>
                <Container fluid className='container'>
                    <Navbar.Brand className='logo' href="#">Edu-Hub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink
                                to="/home"
                                className='header'
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#3D56B2",

                                }}
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/courses"
                                className='header'
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#3D56B2"
                                }}
                            >
                                All Courses
                            </NavLink>

                            <NavLink
                                to="/features"
                                className='header'
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#3D56B2"
                                }}
                            >
                                Featured
                            </NavLink>

                            <NavLink
                                to="/about"
                                className='header'
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#3D56B2"
                                }}
                            >
                                About Us
                            </NavLink>

                            <NavLink
                                to="/about"
                                className='header'
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#3D56B2"
                                }}
                            >
                                <NavDropdown
                                    id="nav-dropdown"
                                    title="Extras"
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item href="/courses">All Courses</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">Our Goals</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">Success Stories</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
                                    
                                </NavDropdown>
                            </NavLink>

                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <FontAwesomeIcon icon={faSearch} className='awesomelogo' />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;