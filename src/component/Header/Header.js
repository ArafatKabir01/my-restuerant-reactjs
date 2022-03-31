import React, { useEffect, useState } from 'react';
import { Carousel, Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CustomLink from '../CustomLink/CustomLink';


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
      <CustomLink className='ms-4 text-decoration-none fw-bold fs-5 ' to="/about" >About</CustomLink>
      
      <CustomLink className='ms-4 text-decoration-none fw-bold fs-5 ' to="/food">
        Food
      </CustomLink>
      <CustomLink className='ms-4 text-decoration-none fw-bold fs-5 ' to="/search">
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
      </CustomLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


        </div>
    );
};

export default Header;