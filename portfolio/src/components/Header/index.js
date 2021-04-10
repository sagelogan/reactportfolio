import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar,Row, Container, Col, Jumbotron, Button} from 'react-bootstrap';
import './Header.css';

function Header() {

  return (
    <>
      <Container class="header">
        <Jumbotron>
          <h1>Logan Sage</h1>
        </Jumbotron>
      </Container>
    </>
  );
}

export default Header;