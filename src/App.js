import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import ParticlesBg from 'particles-bg'

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SalvinificationPage from './pages/SalvinificationPage';
import AuroraDetailPage from './pages/AuroraDetailPage'

import logo from './assets/images/AP_logo_hot.svg';

let bgConfig = {
  num: [4, 7],
  rps: 0.1,
  radius: [5, 40],
  life: [1.5, 3],
  v: [2, 3],
  tha: [-40, 40],
  // body: "./img/icon.png", // Whether to render pictures
  // rotate: [0, 20],
  alpha: [0.6, 0],
  scale: [1 , 0.1],
  position: {x:1,y:1,width: window.innerWidth,height: window.innerHeight},
  color: ["random", "#ff0000"],
  cross: "dead", // cross or bround
  random: 15,  // or null,
  g: 5,    // gravity
  // f: [2, -1], // force
  onParticleUpdate: (ctx, particle) => {
      ctx.beginPath();
      ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Alessandro Palumbo',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Salvinification', path: '/salvinification' },
        { title: 'Aurora', path: '/projects/aurora' },
      ],
      home: {
        title: 'Alessandro Palumbo',
        subtitle: 'Welcome to my crazy place 🤪',
        text: 'Check out my projects below, contact me, or just have fun playing Salvinification'
      },
      about: {
        title: 'Hi there!',
        subtitle: 'Nice to meet you 😁'
      },
      salvinification: {
        title: 'Salvinification 2.0',
        subTitle: 'Have fun changing our favourite superhero\'s dresses',
      },
      aurora: {
        title: 'Aurora',
        subTitle: 'Aurora is a robotic dog, thought and originated from scratch',
      },
    }
  }

  componentDidMount() {
    document.title="Alessandro Palumbo";
  }

  render() {
    return (
      <Router>
        <Container className="p-0 my-main-wrapper" fluid={true}>
          <Navbar className="font-reross-quad" bg="dark" expand="md">
            <Navbar.Brand><Link to="/"><img id="nav-logo" src={logo} alt="Il mio logo" /></Link></Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link text-light" to="/">Home</Link>
                <Link className="nav-link text-light" to="/about">About</Link>
                <Link className="nav-link text-light" to="/salvinification">Salvinification</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subtitle} text={this.state.home.text} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subtitle} />} />
          <Route path="/salvinification" exact render={() => <SalvinificationPage title={this.state.salvinification.title} subTitle={this.state.salvinification.subTitle} />} />
          <Route path="/projects/aurora" exact render={() => <AuroraDetailPage title={this.state.aurora.title} subTitle={this.state.aurora.subTitle} text={this.state.aurora.text} />} />
          <ParticlesBg id="bg" color="#dc3545" type="custom" config={bgConfig} num={40} bg={true} />

        </Container>
        <Footer fluid={true} />
      </Router>
    );
  }
}

export default App;
