import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Mailto from 'react-protected-mailto';

function Footer() {

    return (
        <footer className="mt-5">
            <Container className="my-footer" fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={4} sm={12}>
                        Alessandro Palumbo
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