import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Slot from '../components/Slot'
import Hero from '../components/Hero';

function SalvinificationPageTest(props) {
  return (
    <Container fluid={true}>
      <Row>
        <Col className="bg-danger flag" sm={12} md={4}></Col>
        <Col className="bg-light flag" sm={12} md={4}></Col>
        <Col className="bg-success flag" sm={12} md={4}></Col>
      </Row>
      <Hero title={props.title} subTitle={props.subTitle} /> 
      <Slot />
    </Container>
  );
}


export default SalvinificationPageTest;

