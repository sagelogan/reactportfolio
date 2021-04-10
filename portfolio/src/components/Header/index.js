import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar,Row, Container, Col, Jumbotron} from 'react-bootstrap';
import './Header.css';

function Header() {

  return (
    <>
      <Jumbotron fixed="top" className="justify-content-center text-align-center" >
            <Container className="justify-content-center">
              <Row>
                <Col>
                <a id="logo-container" href="#" class="brand-logo">Logan Sage</a>
                </Col>
              </Row>
            </Container>
        </Jumbotron>
    </>
  );
}

export default Header;