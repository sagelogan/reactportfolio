import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar,Row, Container, Col} from 'react-bootstrap';

function Footer() {

  return (
    <>
      <Navbar fixed="bottom" className="justify-content-center" >
          <Navbar.Brand href="#home">
            <Container className="justify-content-space-between">
              <Row className="align-items-center">
                <Col xs="auto">
                <a href="https://www.linkedin.com/in/logan-sage-71021018b/" class="fa fa-linkedin">Linkedin</a>
                </Col>
                <Col>
                </Col>
                <Col xs="auto">
                <a href="https://www.instagram.com/logan.sage/" class="fa fa-instagram">Instagram</a> 
                </Col>
                <Col>
                </Col>
                <Col xs="auto">
                <a href="https://www.youtube.com/channel/UCk5k-zDWVQuH5xBDswh2Ppg?view_as=subscriber" class="fa fa-youtube">YouTube</a>
                </Col>
                <Col>
                </Col>
                <Col xs="auto">
                <a href="https://github.com/sagelogan" class="fa fa-github">GitHub</a>
                </Col>
              </Row>
            </Container>
          </Navbar.Brand>
        </Navbar>
    </>
  );
}

export default Footer;