import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './AppNavbar.css';

export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/"><img src={logo} alt="logo" className="logo-image" />Golden Real Estate</NavbarBrand>
      <NavbarToggler onClick={this.toggle}/>

    </Navbar>;
  }
}