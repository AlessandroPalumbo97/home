import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: window.innerWidth < 1200,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
        this.setState({
            isMobile: window.innerWidth < 1200
        });
    }, false);
  }

  render() {
    return (
      <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container fluid={true}>
          <Row className="justify-content-center pt-5 pb-2">
            <Col md={8} sm={12} >
              {this.props.photo && <img src={this.props.photo} alt={this.props.title} className="hero-photo d-inline mr-4" />}
              <div className="d-inline-block align-middle">
                {this.props.title && <h1 className="title font-reross-quad">{this.props.title}</h1>}
                {this.props.subTitle && <h3 className="subtitle">{this.props.subTitle}</h3>}
                {this.props.text && <h3 className="lead mt-4 font-weight-light">{this.props.text}</h3>}
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default Hero;