import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ParticlesBg from 'particles-bg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


const mailIcon = <FontAwesomeIcon className="fa-lg footer-icon" icon={ faEnvelope } />
const instaIcon = <FontAwesomeIcon className="fa-lg footer-icon" icon={ faInstagram } />

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
                        <span>You can find me on: </span>
                        <br />
                        <a href="mailto:mr.alessandropalumbo@gmail.com">{mailIcon}</a>
                        <a href="https://www.instagram.com/mistermagicp/">{instaIcon}</a>
                    </Col>
                </Row>
                <ParticlesBg id="footer-bg" color="#ffffff" type={"cobweb"} num={10} bg={true} />
            </Container>
        </footer>
    );

}

export default Footer;