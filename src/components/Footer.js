import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Mailto from 'react-protected-mailto';

function Footer() {

    return (
        <footer className="mt-5 p-0">
            <Container className="my-footer mt-auto mb-auto" fluid={true}>
                <Row className="border-top justify-content-between p-3 align-middle">
                    <Col className="p-0 mt-auto mb-auto" md={4} sm={12}>
                        <span>Alessandro Palumbo</span>
                    </Col>
                    <Col className="p-0" md={4} sm={12}></Col>
                    <Col className="p-0 text-center" md={4} sm={12}>
                        <p>You can find me at: </p>
                        <Mailto email="mr.alessandropalumbo@gmail.com" obfuscate={true}>
                            mr.alessandropalumbo@gmail.com
                        </Mailto>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;