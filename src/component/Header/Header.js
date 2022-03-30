import React, { useEffect, useState } from 'react';
import { Carousel, Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div>
<Navbar collapseOnSelect expand="lg" bg="info">
  <Container>
  <Navbar.Brand ><Link className='fw-bold fs-4 text-decoration-none text-dark' to='/'>Fanku Rasturant</Link></Navbar.Brand>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav >
      <Link className='ps-4 text-decoration-none fw-bold fs-5 text-dark' to="/about">About</Link>
      <Link className='ps-4 text-decoration-none fw-bold fs-5 text-dark' to="/food">
        Food
      </Link>
      <Link className='ps-4 text-decoration-none fw-bold fs-5 text-dark' to="/search">
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
      </Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


        </div>
    );
};

export default Header;