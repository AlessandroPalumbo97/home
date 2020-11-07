import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Mailto from 'react-protected-mailto';
import ParticlesBg from 'particles-bg';


function Footer() {

    return (
        <footer>
            <Container id="my-footer" fluid={true}>
                <Row className="border-top text-center text-light pt-4 pb-4">
                    <Col className="p-0 mt-auto mb-auto font-reross-quad " md={4} sm={12}>
                        <h4 className="my-auto">Alessandro Palumbo</h4>
                    </Col>
                    <Col className="p-0 mt-auto mb-auto" md={4} sm={12}></Col>
                    <Col className="footer-link p-0 mt-auto mb-auto font-novel-sans" md={4} sm={12}>
                        <span>You can find me at: </span>
                        <br />
                        <Mailto email="mr.alessandropalumbo@gmail.com" obfuscate={true}>
                            mr.alessandropalumbo@gmail.com
                        </Mailto>
                    </Col>
                </Row>
                <ParticlesBg id="footer-bg" color="#ffffff" type={"cobweb"} num={10} bg={true} />

            </Container>
        </footer>
    );

}

export default Footer;