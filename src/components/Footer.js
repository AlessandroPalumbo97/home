import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Mailto from 'react-protected-mailto';

function Footer() {

    return (
        <footer>
            <Container id="my-footer" fluid={true}>
                <Row className="border-top text-center pt-4 pb-4">
                    <Col className="p-0 mt-auto mb-auto font-lust " md={4} sm={12}>
                        <h4 className="mt-auto mb-auto">Alessandro Palumbo</h4>
                    </Col>
                    <Col className="p-0 mt-auto mb-auto" md={4} sm={12}></Col>
                    <Col className="p-0 mt-auto mb-auto font-novel-sans" md={4} sm={12}>
                        <span>You can find me at: </span>
                        <br />
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