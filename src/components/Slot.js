import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import html2canvas from 'html2canvas';

import Dress0 from '../assets/salvinification/Ken.png';
import Dress1 from '../assets/salvinification/0.png';
import Dress2 from '../assets/salvinification/1.png';
import Dress3 from '../assets/salvinification/2.png';
import Dress4 from '../assets/salvinification/3.png';
import Dress5 from '../assets/salvinification/4.png';

import salvini from '../assets/salvinification/s3.png';

const { Component } = React;


class Slot extends Component {
  static defaultProps = {
    dresses: [Dress0, Dress1, Dress2, Dress3, Dress4, Dress5],
    names: ["", "Spock-vini", "S.W.A.Tvini", "Salvini carramba", "Salvini ufficiale", "Salvini pulotto"]
  };

  constructor(props) {
    super(props);
    this.state = { 
      slot: Dress0,
      name: null,
      rolling: false,
      lastOption: null
    };

    this.slotRef = React.createRef();
    this.captureBtnRef = React.createRef();
    this.screenshotNameRef = React.createRef();
  }

  // Trigger rolling and maintain state
  roll = () => {
    this.setState({
      rolling: true
    });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 700);

    const selected = this.triggerSlotRotation(this.slotRef.current);
    this.setState({ slot: selected });
  };

  // This will create a rolling effect and return random selected option
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

  // Don't permit to extract the same random number of the precedent
  avoidDuplicateOption = () => {
    let random = Math.floor(Math.random() * Slot.defaultProps.dresses.length);

    while (random === this.state.lastOption || random === 0) {
      random = Math.floor(Math.random() * Slot.defaultProps.dresses.length);
    }
    
    this.setState({ lastOption: random });

    setTimeout(() => {
      this.setState({ name: Slot.defaultProps.names[random] });
      if (this.captureBtnRef.current.style.display !== "none") {
        this.captureBtnRef.current.style.display = "block";
      }
    }, 600);

    return random;
  }

  // Take the screenshot
  screenshot = () => {
    this.screenshotNameRef.current.style.display = "block";
    let toCapture = document.getElementById("capture");

    html2canvas(toCapture, {y: 250}).then((canvas) => {
      this.saveAs(canvas.toDataURL("image/png"), this.state.name + '.png');
      window.location.reload();
    });  
  }

  // Save the screenshot
  saveAs = (url, salvinification) => {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = url;
      link.download = salvinification;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    else {
      window.open(url);
    }
  }
  
  render() {
    return (
      <div className="SlotMachine text-center">
        <Row>
          <Col md={6} sm={12}>
            <div id="capture">
              <div className="text-center">
                <img className="salvini-face" src={salvini} alt="salvini's face" />
              </div>
              <div id="slot">
                <section>
                  <div className="slot-container" ref={this.slotRef}>
                    {Slot.defaultProps.dresses.map((dress, i) => (
                      <div key={i}>
                        <img className="salvini-dress" src={dress} alt="salvini's dress" />
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              <h1 id="screenshot-name" className="display-3" ref={this.screenshotNameRef}>{this.state.name}</h1>
            </div>
          </Col>
          <Col className="my-auto font-weight-bolder" md={6} sm={12}>
            <h2 className="my-4 display-4">{this.state.name}</h2>
            <div className={!this.state.rolling ? "roll rolling mx-auto" : "roll mx-auto"} onClick={!this.state.rolling ? this.roll :  undefined} disabled={this.state.rolling} >
              {this.state.rolling ? "Rolling..." : "ROLL"}
            </div>
            <div className="screenshot mx-auto my-4" onClick={this.screenshot} ref={this.captureBtnRef} disabled={this.state.rolling}>
              SAVE HIM
            </div>
          </Col>
        </Row>
        {/* <Row className="text-center font weight-bolder my-4">
          <Col md={12} sm={12}>
            Salvinification has been developed by me and Elisa Cinquemani
          </Col>
        </Row> */}
      </div>
    );
  }
}

export default Slot

// ReactDOM.render(<Slot />, document.getElementById('react-root'));