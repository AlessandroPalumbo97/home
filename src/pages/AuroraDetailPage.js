import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Hero from '../components/Hero';

import draw1 from '../assets/images/aurora/draw1.png';
import draw2 from '../assets/images/aurora/draw2.png';
import building1 from '../assets/images/aurora/building1.jpeg';
import building2 from '../assets/images/aurora/building2.jpg';
import render3 from '../assets/images/aurora/render3.png';
import render4 from '../assets/images/aurora/render4.png';


class AuroraDetailPage extends React.Component {
    render() {
        return (
            <div>
                <Hero title={this.props.title} subTitle={this.props.subTitle} /> 
                <Row className="justify-content-right">
                    

                    <Col sm={12} md={8} className="p-4 mx-auto my-auto">
                        <p>First thoughts were about the lonliness, the feeling of solitude...</p>
                        <p>
                            Solitude is reliable to premature death so much as obesity. 
                            Even United Kingdom established the solitude minister in 2008. 
                            One of the most common solutions for this complex problem is to own a domestic animal.
                        </p>
                        <p>
                            Anyway, holding a pet can often be difficult for various reasons. 
                            Aurora was indeed born to achieve the goal of having an active company, without all its related responsabilities.
                        </p>
                    </Col>

                    <Col sm={12} md={12} className="p-0">
                        <img className="aurora-pic" src={draw1} alt="aurora\'s draw 1" />
                    </Col>

                    <Col sm={12} md={12} className="p-0">
                        <img className="aurora-pic" src={draw2} alt="aurora\'s draw 2" />
                    </Col>

                    <Col sm={12} md={8} className="p-4 mx-auto my-auto">
                        <p>
                            So, after a long time of research about animals, robots, and persons, the design phase started.
                            Aurora's body if fully 3D printed, gears and joints included.
                        </p>
                        <p>
                            Interactions are made possible by many different sensors linked to an Arduino Mega that makes Aurora capable of simulate dog's senses.
                            The motion control is made through brushless DC motors and stepper motors, both managed by another Arduino Mega.
                        </p>
                        <p>
                            Last but not least, Aurora has its decisional center inside of a Raspberry Pi 4. 
                            This makes the robot able to replicate a real brain and do things such as store memories, recognize objects, people and sounds, and simulate emotions and moods.
                        </p>
                    </Col>

                    <Col className="p-0" sm={12} md={12}>
                        <img className="aurora-pic d-inline-block" src={building1} alt="aurora\'s build process 1" />
                    </Col>

                    <Col className="p-0" sm={12} md={12}>
                        <img className="aurora-pic d-inline-block" src={building2} alt="aurora\'s build process 2" />
                    </Col>

                    <Col sm={12} md={8} className="p-4 mx-auto my-auto">
                        <p>
                            <h4><b>Aurora has:</b></h4>
                            <ul>
                                <li>28DOF (20 motorized)</li>
                                <li>14 1kW brushless motors with custom gearboxes</li>
                                <li>6 modified 28byj-48 stepper motors</li>
                                <li>10Ah 24V Li-Po battery</li>
                                <li>Original design modeled from scratch</li>
                                <li>Custom link system to absorb shocks</li>
                                <li>44 different sensors</li>
                            </ul>
                        </p>
                    </Col>

                    <Col sm={12} md={12} className="p-0">
                        <img className="aurora-pic" src={render4} alt="aurora\'s render 1" />
                    </Col>

                    <Col sm={12} md={12} className="p-0">
                        <img className="aurora-pic" src={render3} alt="aurora\'s render 2" />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AuroraDetailPage;