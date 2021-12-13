import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.scss'

export default function NavBar(){
  return(
    <Navbar bg="dark" variant='dark' expand="lg" className='text-white'>
      <Container>
        <Navbar.Brand href="#home" className="logo">
        <Link to="/"><h1>E-commerce</h1></Link>
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navNav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">link </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Productos</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
                <Link to="productos/camisas">Camisas</Link>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">
              <Link to="productos/jeans">Jeans</Link>
              </NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.4">
              <Link to="productos/remeras">Remeras</Link>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.5">
              <Link to="productos/shorts">Shorts</Link>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.6">
              <Link to="productos/chombas">Chombas</Link>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.6">
              <Link to="productos/buzos">Buzos</Link>
              </NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.8">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link"><CartWidget/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}
