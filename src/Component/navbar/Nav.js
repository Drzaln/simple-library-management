import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'
import '../../support/style/nav.css'
import { Link } from 'react-router-dom'

export default class Example extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    return (
      <div className='wrapper'>
        <Navbar className='navbar' color='light' light expand='md'>
          <div className='container'>
            <Link to='/'>
              <NavbarBrand className='navbarBrand'>BOOK</NavbarBrand>
            </Link>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <Link to='/list'>
                  <button
                    type='button'
                    className='btn btn-outline-primary btn-sm font-weight-bold'
                  >
                    Buku Dipinjam
                  </button>
                </Link>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
      </div>
    )
  }
}
