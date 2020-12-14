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
import PrintPage from './pages/PrintPage';
import AuroraDetailPage from './pages/AuroraDetailPage'

import logoHot from './assets/images/AP_logo_hot.svg';
import logoIta from './assets/images/AP_logo_italian.svg';
import logoAurora from './assets/images/AP_logo_aurora.svg';

import Me from './assets/images/me.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Alessandro Palumbo',
      currentLogo: logoHot,
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Salvinification', path: '/salvinification' },
        { title: '3D print', path: '/3Dprint' },
        { title: 'Aurora', path: '/aurora' },
      ],
      home: {
        title: 'Alessandro Palumbo',
        subtitle: 'Welcome to my crazy place 🤪',
        text: 'Check out my projects below, contact me, or just have fun playing Salvinification',
      },
      about: {
        title: 'Hi there!',
        subtitle: 'Nice to "meet" you 😁',
        photo: Me
      },
      salvinification: {
        title: 'Salvinification 2.0',
        subTitle: 'Have fun changing our favourite superhero\'s dresses',
      },
      print: {
        title: 'Inspiration turned into reality',
        subTitle: '3D print allows you to dream, project and realize your most insane fantasy',
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

  setLogoStyle = (style) => {
    switch (style) {
      case "italian":
        this.setState({ currentLogo: logoIta });
        break;
      case "aurora":
        this.setState({ currentLogo: logoAurora });
        break;
      case "hot":
      default:
        this.setState({ currentLogo: logoHot });
        break;
    }
  }

  render() {
    return (
      <Router>
        <Container id="my-main-wrapper" className="p-0" fluid={true}>
          <Navbar id="navbar" className="font-reross-quad navbar-dark" expand="md">
            <Navbar.Brand id="nav-logo">
              <Link to="/">
                <img src={this.state.currentLogo} alt="My logo" />
              </Link>
            </Navbar.Brand>
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

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subtitle} text={this.state.home.text} logoStyle={this.setLogoStyle} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subtitle} photo={this.state.about.photo} logoStyle={this.setLogoStyle} />}  />
          <Route path="/salvinification" exact render={() => <SalvinificationPage title={this.state.salvinification.title} subTitle={this.state.salvinification.subTitle} logoStyle={this.setLogoStyle} />} />
          <Route path="/aurora" exact render={() => <AuroraDetailPage title={this.state.aurora.title} subTitle={this.state.aurora.subTitle} text={this.state.aurora.text} logoStyle={this.setLogoStyle} />} />
          <Route path="/3Dprint" exact render={() => <PrintPage title={this.state.print.title} subTitle={this.state.print.subTitle} logoStyle={this.setLogoStyle} />} />
        </Container>
        <Footer fluid={true} />
      </Router>
    );
  }
}

export default App;
