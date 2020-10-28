import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slot from '../components/Slot'

import Hero from '../components/Hero';

import salvini from '../assets/salvinification/s3.png';

class SalvinificationPageTest extends React.Component {

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col className="bg-danger flag" sm={12} md={4}></Col>
          <Col className="bg-light flag" sm={12} md={4}></Col>
          <Col className="bg-success flag" sm={12} md={4}></Col>
        </Row>
        <Slot />
      </Container>
    );
  }
}

export default SalvinificationPageTest;

