import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/img/logo/logo.jpg";




import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faUserPlus, faLock, faBars } from '@fortawesome/free-solid-svg-icons';
import {  NavLink } from "react-router-dom";


 function HeaderComponent(props){


  return (
    <header id='navegacao'>
      <div className="bg-black">
      <div className="container d-flex text-white">
        <div className="p-2 flex-grow-1 "><span><FontAwesomeIcon icon={faPhone} inverse/> +0123 456 789 | <FontAwesomeIcon icon={faEnvelope}/> support@gmail.com</span></div>
        <div className="p-2 login-home"><a href="login"><FontAwesomeIcon icon={faLock} /> Log in</a> | <a href="register"> <FontAwesomeIcon icon={faUserPlus} /> Cadastrar</a></div>
        <div className="p-2">
          <ul className='list-group list-group-horizontal '>
            <li className='list-group list-group-horizontal-xl mx-2 '> <a href="" ><FontAwesomeIcon icon={faTwitter} inverse/></a></li>          
            <li className='list-group list-group-horizontal-xl mx-2 '> <a href=""><FontAwesomeIcon icon={faFacebook} inverse/></a></li>         
            <li className='list-group list-group-horizontal-xl mx-2 '> <a href=""><FontAwesomeIcon icon={faInstagram} inverse/></a></li>
          </ul>       
        </div>
        </div>
      </div>
    
     <Navbar expand="lg" className="bg-body-tertiary nav-pills" sticky='top' >
      <Container>
        <Navbar.Brand href="/"><img src={logo} alt="Só Permuta e imóveis" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" variant='underline' id='navegacao' defaultActiveKey="">
            <Nav.Item>
            <Nav.Link id='home' href='/' >HOME</Nav.Link>
            </Nav.Item>
            <Nav.Link  eventKey="link-1" href="quemsomos">QUEM SOMOS</Nav.Link>
            <Nav.Item>
              <Nav.Link  id='comofunciona'  href="comofunciona">COMO FUNCIONA</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={"link-3"} id='contato' href="contato">CONTATO</Nav.Link>    
            </Nav.Item>          
          </Nav>
        </Navbar.Collapse>
      </Container>
       </Navbar>          
      </header>
  )
} 
export default HeaderComponent;
