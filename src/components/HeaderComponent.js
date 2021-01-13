import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container text-white">
                        <div className="row">
                            <div className="col">                                
                            </div>
                            <div className="col">
                                <h1>Bio Lab</h1>
                                <h2>Inventory</h2>
                            </div>
                            <div className="col">
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container justify-content-center">
                        <NavbarBrand className="mr-auto" href="/">
                            <i className="fa fa-bar-chart fa-lg">{' '}Stats</i> 
                        </NavbarBrand>
                        <NavbarToggler />   
                        <Collapse isOpen={true} navbar className="justify-content-center">
                            <Nav navbar justified className="justify-content-center">
                                <NavItem>
                                    <NavLink className="nav-link" to="/requests">
                                        <i className="fa fa-list-alt fa-lg">{' '}New Requests Board</i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/orders">
                                        <i className="fa fa-truck fa-lg">{' '}Incoming Orders</i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/instock">
                                        <i className="fa fa-folder-open fa-lg">{' '}In stock</i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/outofstock">
                                        <i className="fa fa-folder fa-lg">{' '}Out Of Stock</i>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse> 
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;