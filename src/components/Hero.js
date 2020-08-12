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
    const titleSize = this.state.isMobile ? 'display-5 font-weight-bolder font-lust' : 'display-1 font-weight-bolder font-lust';
    const subTitleSize = this.state.isMobile ? 'display-5 font-weight-light' : 'display-4 font-weight-light';

    return (
      <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container fluid={true}>
          <Row className="justify-content-center py-5">
            <Col md={8} sm={12}>
              {this.props.title && <h1 className={titleSize}>{this.props.title}</h1>}
              {this.props.subTitle && <h3 className={subTitleSize}>{this.props.subTitle}</h3>}
              {this.props.text && <h3 className="lead font-weight-light">{this.props.text}</h3>}
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default Hero;