import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Hero from '../components/Hero';

import draw1 from '../assets/images/aurora/draw1.png';
import draw2 from '../assets/images/aurora/draw2.png';
import building1 from '../assets/images/aurora/building1.jpeg';
import building2 from '../assets/images/aurora/building2.jpg';
import render1 from '../assets/images/aurora/render1.jpg';
// import render2 from '../assets/images/aurora/render2.jpg';
import auroraPNG1 from '../assets/images/aurora/aurora.png';


function AuroraDetailPage(props) {
    return (
        <div>
           <Hero title={props.title} subTitle={props.subTitle} text={props.text} /> 
            <Row className="justify-content-right my-5">
                <Col sm={12} md={8} className="p-0"><img className="aurora-pic" src={draw1} alt="aurora\'s draw 1" /></Col>
                <Col sm={12} md={4} className="p-4 my-auto">
                    <p>First thoughts were about the lonliness, the feeling of solitude...</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </Col>
            </Row>
            <Row className="justify-content-center my-5">
                <Col sm={12} md={4} className="p-4 my-auto">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </Col>
                <Col sm={12} md={8} className="p-0"><img className="aurora-pic" src={draw2} alt="aurora\'s draw 2" /></Col>
            </Row>
            <Row className="my-5">
                <Col className="p-0" sm={12} md={6}>
                    <img className="aurora-pic d-inline-block" src={building1} alt="aurora\'s build process 1" />
                </Col>
                <Col className="p-0" sm={12} md={6}>
                    <img className="aurora-pic d-inline-block" src={building2} alt="aurora\'s build process 2" />
                </Col>
            </Row>
            <Row className="justify-content-center my-5">
                <Col sm={12} md={8} className="p-0"><img className="aurora-pic" src={render1} alt="aurora\'s render 1" /></Col>
                <Col sm={12} md={4} className="p-4 my-auto">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </Col>
            </Row>
            <Row className="justify-content-center mt-5">
                <Col sm={12} md={4} className="p-4 my-auto">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </Col>
                <Col sm={12} md={8} className="p-0"><img className="aurora-pic" src={auroraPNG1} alt="aurora\'s render 2" /></Col>
            </Row>
        </div>
    );
}

export default AuroraDetailPage;