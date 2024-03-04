import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import logo from '../imgs/logo.png'

export default function NavbarComponent() {
  return (
    <Navbar expand="md" className="bg-white sticky-top rounded-3 my-md-2 px-3 d-flex flex-md-column justify-content-between">
      <div className='w-100'>
        <div className='d-flex flex-md-column align-items-center justify-content-between w-100'>
          <Link className='navbar-brand' to="/">
            <Image id='logo' className='w-75' src={logo}/>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className='py-3'>
          <Link to="/" className='nav-link'>Home</Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <Link to="#" className='dropdown-item'>Categorie</Link>
          </NavDropdown>
        </Navbar.Collapse>
      </div>
        
    </Navbar>
  )
}
