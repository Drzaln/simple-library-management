import React from 'react';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';
import './nav.css';
import {Link} from 'react-router-dom';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navbar" color="light" light expand="md">
        <div className="container">
            <Link to='/'><NavbarBrand className="navbarBrand">BOOK</NavbarBrand></Link>
        </div>
        </Navbar>
      </div>
    );
  }
}