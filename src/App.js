import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SalvinificationPage from './pages/SalvinificationPage';

// import APLogo from '../src/assets/images/AP-square-logo.png';
import logo from './assets/images/AP_square.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Alessandro Palumbo',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Salvinification', path: '/salvinification' },
        // { title: 'Slot', path: '/slot' },
      ],
      home: {
        title: 'Boss del poppin',
        subtitle: '99 99 99 99 99 99 99 99 99 99 99 99 99 99 99 99 99 99 99 99 99 99 99 99',
        text: 'No caepnoheeeeeeeeeen'
      },
      about: {
        title: 'Be fool, be crazy',
      },
      salvinification: {
        title: 'Salvinification...',
        subTitle: '...is back! Did you missed it? :)',
        text: 'Have fun changing our favourite superhero\'s dresses'
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
          <Navbar className="border-bottom" bg="light" expand="lg">
            <Navbar.Brand><img src={logo} alt="Il mio logo" /></Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/salvinification">Salvinification</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subtitle} text={this.state.home.text} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/salvinification" exact render={() => <SalvinificationPage title={this.state.salvinification.title} subTitle={this.state.salvinification.subTitle} text={this.state.salvinification.text} />} />
        </Container>
        <Footer fluid={true} />
      </Router>
    );
  }
}

export default App;
