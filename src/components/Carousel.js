import React from 'react';

import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import nervousLink from '../assets/compressed/nervous_fighter.zip';

import nervousCard from '../assets/images/nervousCardx2.png';
import auroraCard from '../assets/images/auroraCardx2.png';

// aurora: {
//   title: 'Aurora',
//   subTitle: 'A brand new man\'s best friend',
//   text: 'Aurora is a robot dog prototype made by me and Leonardo Paglia'
// }

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
          link: '',
          selected: false,
          downloadable: false
        },
        // {
        //   id: 2,
        //   title: 'Nervous Fighter',
        //   subTitle: 'Please don\'t be calm!',
        //   imgSrc: nervous,
        //   link: '',
        //   selected: false
        // }
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