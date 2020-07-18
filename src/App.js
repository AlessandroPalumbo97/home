import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SalvinificationPage from './pages/SalvinificationPage';

import APLogo from '../src/assets/images/AP-logo_small.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Alessandro Palumbo',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
        { title: 'Salvinification', path: '/salvinification' },
      ],
      home: {
        title: 'Outstrip the crowd',
        subtitle: 'Find the right way to be yourself',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'Be fool, be crazy',
      },
      contact: {
        title: 'Something to say?',
      },
      salvinification: {
        title: 'Salvinification',
        subTitle: 'Salvinification is back!... Did you missed it? ;)',
        text: 'Have fun changing our favourite superhero\'s dresses'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0 my-main-wrapper" fluid={true}>

          <Navbar className="border-bottom navbar-dark" bg="warning" expand="lg">
            <Navbar.Brand><img className="" src={APLogo} alt="APLogo" /></Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact me</Link>
                {/* <Link className="nav-link" to="/salvinification">Salvinification</Link> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subtitle} text={this.state.home.text} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />
          {/* <Route path="/salvinification" exact render={() => <SalvinificationPage title={this.state.salvinification.title} subTitle={this.state.salvinification.subTitle} text={this.state.salvinification.text} />} /> */}

        </Container>
        <Footer className="my-footer" fluid={true} />
      </Router>
    );
  }
}

export default App;
