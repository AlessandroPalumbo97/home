import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Dress0 from '../assets/salvinification/0.png';
import Dress1 from '../assets/salvinification/1.png';
import Dress2 from '../assets/salvinification/2.png';
import Dress3 from '../assets/salvinification/3.png';
import Dress4 from '../assets/salvinification/4.png';

import salvini from '../assets/salvinification/s3.png';


const { createRef , Component } = React;

class Slot extends Component {
  static defaultProps = {
    dresses: [Dress0, Dress1, Dress2, Dress3, Dress4],
    names: ["Spock-vini", "S.W.A.Tvini", "Salvini carramba", "Salvini ufficiale", "Salvini pulotto"]
  };

  constructor(props) {
    super(props);
    this.state = { 
      slot: Dress0,
      name: null,
      rolling: false,
      lastOption: null
    };

    // get ref of dic onn which elements will roll
    this.slotRef = React.createRef();
  }

  // to trigger roolling and maintain state
  roll = () => {
    this.setState({
      rolling: true
    });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 700);

    // looping through all 3 Slot to start rolling
    // this will trigger rolling effect
    const selected = this.triggerSlotRotation(this.slotRef.current);
    this.setState({ slot: selected });
  };

  // this will create a rolling effect and return random selected option
  triggerSlotRotation = ref => {
    function setTop(top) {
      ref.style.top = `${top}px`;
    }
    let options = ref.children;
    let randomOption = this.avoidDuplicateOption();
    let choosenOption = options[randomOption];
    setTop(-choosenOption.offsetTop + 2);
    return Slot.defaultProps.dresses[randomOption];
  };

  avoidDuplicateOption = () => {
    let random = Math.floor(Math.random() * Slot.defaultProps.dresses.length);

    while (random == this.state.lastOption) {
      random = Math.floor(Math.random() * Slot.defaultProps.dresses.length);
    }
    
    this.setState({ lastOption: random });
    setTimeout(() => {
      this.setState({ name: Slot.defaultProps.names[random] });
    }, 600);
    return random;
  }

  render() {
    return (
      <div className="SlotMachine text-center">
        <Row>
          <Col md={6} sm={12}>
            <div className="text-center">
              <img src={salvini} className="salvini-face" alt="salvini's face" />
            </div>
            <div className="slot">
              <section>
                <div className="slot-container" ref={this.slotRef}>
                  {Slot.defaultProps.dresses.map((dress, i) => (
                    <div key={i}>
                      <img className="salvini-dress" src={dress} alt="salvini dress" />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </Col>
          <Col className="my-auto" md={6} sm={12}>
            <h2 className="my-4 font-weight-bolder display-4">{this.state.name}</h2>
            <div
              className={!this.state.rolling ? "roll rolling mx-auto" : "roll mx-auto"}
              // onClick={!this.state.rolling && this.roll}
              onClick={!this.state.rolling ? this.roll :  undefined}
              disabled={this.state.rolling}
            >
              {this.state.rolling ? "Rolling..." : "ROLL"}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Slot

// ReactDOM.render(<Slot />, document.getElementById('react-root'));