import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import ParticlesBg from 'particles-bg';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SalvinificationPage from './pages/SalvinificationPage';
import AuroraDetailPage from './pages/AuroraDetailPage'

import logo from './assets/images/AP_logo_hot.svg';
import logo2 from './assets/images/AP_logo_italian.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Alessandro Palumbo',
      currentRoute: "/",
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Salvinification', path: '/salvinification' },
        { title: 'Aurora', path: '/projects/aurora' },
      ],
      home: {
        title: 'Alessandro Palumbo',
        subtitle: 'Welcome to my crazy place 🤪',
        text: 'Check out my projects below, contact me, or just have fun playing Salvinification',
      },
      about: {
        title: 'Hi there!',
        subtitle: 'Nice to "meet" you 😁',
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
    document.title = this.state.title;
  }

  swapLogo = (r) => {
    console.log(r);
    this.setState({ currentRoute: r });
  }

  render() {
    return (
      <Router>
        <Container id="my-main-wrapper" className="p-0" fluid={true}>
          <Navbar id="navbar" className="font-reross-quad navbar-dark" expand="md">
            <Navbar.Brand id="nav-logo">
              <Link to="/">
                <img src={this.state.currentRoute === "/salvinification" ? logo2 : logo } alt="Il mio logo" /></Link></Navbar.Brand>
            <Navbar.Toggle className="border-0 nav-link" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link text-light" to="/">Home</Link>
                <Link className="nav-link text-light" to="/about">About</Link>
                <Link className="nav-link text-light" to="/salvinification">Salvinification</Link>
              </Nav>
            </Navbar.Collapse>
            <ParticlesBg color="#ffffff" type={"cobweb"} num={10} bg={true} />
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subtitle} text={this.state.home.text} setRoute={this.swapLogo} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subtitle} setRoute={this.swapLogo} />}  />
          <Route path="/salvinification" exact render={() => <SalvinificationPage title={this.state.salvinification.title} subTitle={this.state.salvinification.subTitle} setRoute={this.swapLogo} />} />
          <Route path="/projects/aurora" exact render={() => <AuroraDetailPage title={this.state.aurora.title} subTitle={this.state.aurora.subTitle} text={this.state.aurora.text} setRoute={this.swapLogo} />} />
        </Container>
        <Footer fluid={true} />
      </Router>
    );
  }
}

export default App;
