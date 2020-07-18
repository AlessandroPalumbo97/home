import React from 'react';

import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import nervous from '../assets/images/NervousCardx2.png';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Nervous Fighter!',
          subTitle: 'My BETA version of a stickman fighter',
          imgSrc: nervous,
          link: '',
          selected: false
        },
        {
          id: 1,
          title: 'Nervous Fighter',
          subTitle: 'Please don\'t be calm!',
          imgSrc: nervous,
          link: '',
          selected: false
        },
        {
          id: 2,
          title: 'Nervous Fighter',
          subTitle: 'Please don\'t be calm!',
          imgSrc: nervous,
          link: '',
          selected: false
        }
      ]
    }
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if(item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    });
  }

  makeItems = (items) => {
    return items.map(item => {
      return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    });
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }

} 

export default Carousel;