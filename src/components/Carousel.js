import React from 'react';

import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import nervousCard from '../assets/images/cards/nervousCardx2.png';
import nervousLink from '../assets/compressed/nervous_fighter.zip';

import auroraCard from '../assets/images/cards/auroraCardx2.png';

import printCard from '../assets/images/cards/printCardx2.png';

class Carousel extends React.Component {
  state = {
    items: [
      {
        id: 0,
        title: 'Nervous Fighter!',
        subTitle: 'My BETA version of a stickman fighter',
        imgSrc: nervousCard,
        link: nervousLink,
        selected: false,
        downloadable: true
      },
      {
        id: 1,
        title: 'Aurora',
        subTitle: '3D printed robot dog!',
        imgSrc: auroraCard,
        link: '/aurora',
        selected: false,
        downloadable: false
      },
      {
        id: 2,
        title: 'Printed is better',
        subTitle: '3D print is amazing, check it out!',
        imgSrc: printCard,
        link: '/3Dprint',
        selected: false,
        downloadable: false
      },
    ]
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