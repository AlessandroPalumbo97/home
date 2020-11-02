import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import html2canvas from 'html2canvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

import Dress0 from '../assets/salvinification/Ken.png';
import Dress1 from '../assets/salvinification/0.png';
import Dress2 from '../assets/salvinification/1.png';
import Dress3 from '../assets/salvinification/2.png';
import Dress4 from '../assets/salvinification/3.png';
import Dress5 from '../assets/salvinification/4.png';

import face0 from '../assets/salvinification/face0.png';
import face1 from '../assets/salvinification/face1.png';


const { Component } = React;
const downloadIcon = <FontAwesomeIcon icon={faFileDownload} />

class Slot extends Component {
  static defaultProps = {
    faces: [face0, face1],
    dresses: [Dress0, Dress1, Dress2, Dress3, Dress4, Dress5],
    names: ["", "Spock-vini", "S.W.A.Tvini", "Salvini carramba", "Salvini ufficiale", "Salvini pulotto"]
  };

  constructor(props) {
    super(props);
    this.state = { 
      slot: Dress0,
      face: face0,
      name: null,
      rolling: false,
      lastBodyOption: null,
      lastFaceOption: null
    };

    this.faceSlotRef = React.createRef();
    this.bodySlotRef = React.createRef();
    this.captureBtnRef = React.createRef();
    this.captureLabelRef = React.createRef();
    this.screenshotNameRef = React.createRef();
  }

  rollBoth = () => {
    this.rollFace();
    this.rollBody();
  }

  // ======================= FACE =======================
  // Trigger rolling and maintain state
  rollFace = () => {
    this.setState({
      rolling: true
    });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 700);

    const selected = this.triggerFaceSlotRotation(this.faceSlotRef.current);
    this.setState({ face: selected });
  };

  // This will create a rolling effect and return random selected option
  triggerFaceSlotRotation = ref => {
    function setTop(top) {
      ref.style.top = `${top}px`;
    }
    let options = ref.children;
    let randomOption = this.avoidFaceDuplicateOption();
    console.log(randomOption);
    let choosenOption = options[randomOption];
    setTop(-choosenOption.offsetTop);
    return Slot.defaultProps.faces[randomOption];
  };

  // Don't permit to extract the same random number of the precedent
  avoidFaceDuplicateOption = () => {
    let random = Math.floor(Math.random() * Slot.defaultProps.faces.length);

    while (random === this.state.lastFaceOption) {
      random = Math.floor(Math.random() * Slot.defaultProps.faces.length);
    }
    
    this.setState({ lastFaceOption: random });

    setTimeout(() => {
      if (this.captureBtnRef.current.style.display !== "block") {
        this.captureBtnRef.current.style.display = "block";
        this.captureLabelRef.current.style.display = "block";
      }
    }, 600);

    return random;
  }

  // ======================= BODY =======================
  rollBody = () => {
    this.setState({
      rolling: true
    });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 700);

    const selected = this.triggerBodySlotRotation(this.bodySlotRef.current);
    this.setState({ slot: selected });
  };

  triggerBodySlotRotation = ref => {
    function setTop(top) {
      ref.style.top = `${top}px`;
    }
    let options = ref.children;
    let randomOption = this.avoidBodyDuplicateOption();
    let choosenOption = options[randomOption];
    setTop(-choosenOption.offsetTop + 2);
    return Slot.defaultProps.dresses[randomOption];
  };

  avoidBodyDuplicateOption = () => {
    let random = Math.floor(Math.random() * Slot.defaultProps.dresses.length);

    while (random === this.state.lastOption || random === 0) {
      random = Math.floor(Math.random() * Slot.defaultProps.dresses.length);
    }
    
    this.setState({ lastOption: random });

    setTimeout(() => {
      this.setState({ name: Slot.defaultProps.names[random] });
      if (this.captureBtnRef.current.style.display !== "block") {
        this.captureBtnRef.current.style.display = "block";
        this.captureLabelRef.current.style.display = "block";
      }
    }, 600);

    return random;
  }

  // Take the screenshot
  screenshot = () => {
    this.screenshotNameRef.current.style.display = "block";
    let toCapture = document.getElementById("capture");

    html2canvas(toCapture, {y: 250}).then((canvas) => {
      this.state.name != null ? this.saveAs(canvas.toDataURL("image/png"), this.state.name + '.png') : this.saveAs(canvas.toDataURL("image/png"), 'Salvini.png');
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
              <div id="face-slot">
                <section className="face-section">
                  <div className="slot-container" ref={this.faceSlotRef}>
                    {Slot.defaultProps.faces.map((face, i) => (
                      <div key={i}>
                        <img className="salvini-face" src={face} alt="salvini's face" />
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              <div id="body-slot">
                <section className="body-section">
                  <div className="slot-container" ref={this.bodySlotRef}>
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
            <div className={!this.state.rolling ? "roll-face rolling mx-auto my-2" : "roll-face mx-auto my-2"} onClick={!this.state.rolling ? this.rollFace :  undefined} disabled={this.state.rolling} >
              {this.state.rolling ? "Rolling..." : "ROLL FACE"}
            </div>
            <div className={!this.state.rolling ? "roll-body rolling mx-auto my-2" : "roll-body mx-auto my-2"} onClick={!this.state.rolling ? this.rollBody :  undefined} disabled={this.state.rolling} >
              {this.state.rolling ? "Rolling..." : "ROLL BODY"}
            </div>
            <div className={!this.state.rolling ? "roll rolling mx-auto my-2" : "roll mx-auto my-2"} onClick={!this.state.rolling ? this.rollBoth :  undefined} disabled={this.state.rolling} >
              {this.state.rolling ? "Rolling..." : "ROLL BOTH"} 
            </div>
            <div className="screenshot mx-auto mt-4" onClick={this.screenshot} ref={this.captureBtnRef} disabled={this.state.rolling} target="_self">
              SAVE HIM {downloadIcon}
            </div>
            <p ref={this.captureLabelRef} className="screenshot-label text-muted">Desktop only</p>
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