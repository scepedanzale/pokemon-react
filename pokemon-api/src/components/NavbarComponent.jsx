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
          <div className='text-start w-100'>
            <Link to="/favourites" className='nav-link blu fw-bold text-uppercase mt-3'>Preferiti</Link>
            <hr />
            <Link to="/" className='nav-link'>Pokémon</Link>
            <Link to="/" className='nav-link'>Tipi</Link>
            <Link to="/" className='nav-link'>Mosse</Link>
            <Link to="/" className='nav-link'>Regioni</Link>
            <Link to="/" className='nav-link'>Generazioni</Link>
            <Link to="/" className='nav-link'>Giochi</Link>
          </div>
        </Navbar.Collapse>
      </div>
        
    </Navbar>
  )
}
