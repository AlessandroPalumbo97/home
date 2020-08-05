import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import $ from "jquery";
import html2canvas from 'html2canvas';

import SlotMachine from 'jquery-slotmachine/lib/slot-machine.js';

import Hero from '../components/Hero';

// Salvini dresses
import SalviniFace from '../assets/salvinification/s3.png';
import Dress0 from '../assets/salvinification/0.png';
import Dress1 from '../assets/salvinification/1.png';
import Dress2 from '../assets/salvinification/2.png';
import Dress3 from '../assets/salvinification/3.png';
import Dress4 from '../assets/salvinification/4.png';
import Dress5 from '../assets/salvinification/5.png';
import Dress6 from '../assets/salvinification/6.png';
import Dress7 from '../assets/salvinification/7.png';
import Dress8 from '../assets/salvinification/8.png';
import Dress9 from '../assets/salvinification/9.png';
import Dress10 from '../assets/salvinification/10.png';
import Dress11 from '../assets/salvinification/11.png';
import Dress12 from '../assets/salvinification/12.png';
import Dress13 from '../assets/salvinification/13.png';
import Dress14 from '../assets/salvinification/14.png';
import Dress15 from '../assets/salvinification/15.png';
import Dress16 from '../assets/salvinification/16.png';
import Dress17 from '../assets/salvinification/17.png';
import Dress18 from '../assets/salvinification/18.png';
import Dress19 from '../assets/salvinification/19.png';
import Dress20 from '../assets/salvinification/20.png';
import Dress21 from '../assets/salvinification/21.png';
import Dress22 from '../assets/salvinification/22.png';
import Dress23 from '../assets/salvinification/23.png';
import Dress24 from '../assets/salvinification/24.png';
import Dress25 from '../assets/salvinification/25.png';
import Dress26 from '../assets/salvinification/26.png';
import Dress27 from '../assets/salvinification/27.png';
import Dress28 from '../assets/salvinification/28.png';
import Dress29 from '../assets/salvinification/29.png';
import Dress30 from '../assets/salvinification/30.png';
import Dress31 from '../assets/salvinification/31.png';
import Dress32 from '../assets/salvinification/32.png';
import Dress33 from '../assets/salvinification/33.png';
import Dress34 from '../assets/salvinification/34.png';
import Dress35 from '../assets/salvinification/35.png';
import Dress36 from '../assets/salvinification/36.png';
import Dress37 from '../assets/salvinification/37.png';
import Dress38 from '../assets/salvinification/38.png';
import Dress39 from '../assets/salvinification/39.png';
import Dress40 from '../assets/salvinification/40.png';
import Dress41 from '../assets/salvinification/41.png';
import Dress42 from '../assets/salvinification/42.png';
import Dress43 from '../assets/salvinification/43.png';
import Dress44 from '../assets/salvinification/44.png';
import Dress45 from '../assets/salvinification/45.png';
import Dress46 from '../assets/salvinification/46.png';
import Dress47 from '../assets/salvinification/47.png';
import Dress48 from '../assets/salvinification/48.png';
import Dress49 from '../assets/salvinification/49.png';
import Dress50 from '../assets/salvinification/50.png';
import Dress51 from '../assets/salvinification/51.png';
import Dress52 from '../assets/salvinification/52.png';
import Dress53 from '../assets/salvinification/53.png';
import Dress54 from '../assets/salvinification/54.png';
import Dress55 from '../assets/salvinification/55.png';
import Dress56 from '../assets/salvinification/56.png';
import Dress57 from '../assets/salvinification/57.png';
import Dress58 from '../assets/salvinification/58.png';
import Dress59 from '../assets/salvinification/59.png';
import Dress60 from '../assets/salvinification/60.png';
import Dress61 from '../assets/salvinification/61.png';
import Dress62 from '../assets/salvinification/62.png';
import Dress63 from '../assets/salvinification/63.png';
import Dress64 from '../assets/salvinification/64.png';
import Dress65 from '../assets/salvinification/65.png';
import Dress66 from '../assets/salvinification/66.png';
import Dress67 from '../assets/salvinification/67.png';
import Dress68 from '../assets/salvinification/68.png';
import Dress69 from '../assets/salvinification/69.png';
import Dress70 from '../assets/salvinification/70.png';
import Dress71 from '../assets/salvinification/71.png';
import Dress72 from '../assets/salvinification/72.png';
import Dress73 from '../assets/salvinification/73.png';
import Dress74 from '../assets/salvinification/74.png';
import Dress75 from '../assets/salvinification/75.png';
import Dress76 from '../assets/salvinification/76.png';
import Dress77 from '../assets/salvinification/77.png';
import Dress78 from '../assets/salvinification/78.png';
import Dress79 from '../assets/salvinification/79.png';
import Dress80 from '../assets/salvinification/80.png';
import Dress81 from '../assets/salvinification/81.png';
import Dress82 from '../assets/salvinification/82.png';
import Dress83 from '../assets/salvinification/83.png';
import Dress84 from '../assets/salvinification/84.png';
import Dress85 from '../assets/salvinification/85.png';
import Dress86 from '../assets/salvinification/86.png';
import Dress87 from '../assets/salvinification/87.png';
import Dress88 from '../assets/salvinification/88.png';
import Dress89 from '../assets/salvinification/89.png';
import Dress90 from '../assets/salvinification/90.png';
import Naked from '../assets/salvinification/Ken.png';

class SalvinificationPage extends React.Component {

  constructor(props) {
    super(props);

    this.machineRef = React.createRef();
    this.alertRef = React.createRef();
    this.alertWrapperRef = React.createRef();
    this.randomBtnRef = React.createRef();
    this.saveBtnRef = React.createRef();
    this.salviniNameRef = React.createRef();
    this.screenshotRef = React.createRef();
    this.mainWrapperRef = React.createRef();
    this.bodyToScreenRef = React.createRef();
    this.bodyRef = React.createRef();

    this.state = {
      salviniName: "",
      bgDelay: 200,
      time: 0,
      currentDress: null,
      dresses: [
        Dress0, Dress1, Dress2, Dress3, Dress4, Dress5, Dress6, Dress7, Dress8, Dress9, Dress10, Dress11, Dress12, Dress13, Dress14, Dress15, Dress16, Dress17, Dress18, Dress19, Dress20, Dress21, Dress22, Dress23, Dress24, Dress25, Dress26, Dress27, Dress28, Dress29, Dress30, Dress31, Dress32, Dress33, Dress34, Dress35, Dress36, Dress37, Dress38, Dress39, Dress40, Dress41, Dress42, Dress43, Dress44, Dress45, Dress46, Dress47, Dress48, Dress49, Dress50, Dress51, Dress52, Dress53, Dress54, Dress55, Dress56, Dress57, Dress58, Dress59, Dress60, Dress61, Dress62, Dress63, Dress64, Dress65, Dress66, Dress67, Dress68, Dress69, Dress70, Dress71, Dress72, Dress73, Dress74, Dress75, Dress76, Dress77, Dress78, Dress79, Dress80, Dress81, Dress82, Dress83, Dress84, Dress85, Dress86, Dress87, Dress88, Dress89, Dress90
      ],
      disableSpin: false
    }
  }

  componentDidMount() {
    const el = this.machineRef.current;
    this.machine = new SlotMachine(el, { active: 0 });
    this.btn = this.randomBtnRef.current;
    this.bodyRef.current.style.display = "none";
    this.alertRef.current.style.display = "none";
  }

  onSpinClick = () => {
    this.showMachine();
    this.machine.shuffle(1, this.onComplete);
  }

  showMachine = () => {
    if ($("#ken").is(":visible")) {
      $("#machine").css({
        "position": "relative",
        "opacity": "1"
      });
      $("#ken").css("display", "none");
    }
  }

  onComplete = (active) => {
    this.salviniName = this.imageToName(this.machine.visibleTile);
    this.salviniNameRef.current.innerHTML = "<div className='text-dark h4'>HAI SBLOCCATO: <p id='salviniName' className='text-danger'>" + this.salviniName + "</p></div>";
    this.setState({ currentDress: this.machine.visibleTile });

    if (this.machine.visibleTile === 10) {
      this.setState({ disableSpin: true });
      this.redBg();
      this.toggleAlert();

      const time = setInterval(() => {
        this.stroboBg()
      }, this.state.bgDelay);
      setTimeout(() => {
        clearInterval(time);
        this.restoreBg();
        this.redBg();
      }, 3500);
    }
    else {
      this.restoreBg();
    }

    this.showBtnScreenshot();
  }

  screenshot = () => {
    var divToRemove = this.machineRef.current;
    divToRemove.parentNode.removeChild(divToRemove);
    this.bodyRef.current.style.display = "block";

    // Screenshot
    html2canvas(this.screenshotRef.current).then((canvas) => {
      this.saveAs(canvas.toDataURL("image/png"), 'salvinification.png');
      window.location.reload();
    });
  }

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

  toggleAlert = () => {
    if (this.alertRef.current.style.display === "inline-block") {
      this.alertRef.current.style.display = "none";
      this.setState({ disableSpin: false });
    }
    else {
      this.alertRef.current.style.display = 'inline-block';
    }
  }

  showBtnScreenshot = () => {
    const btnScreenshot = this.saveBtnRef.current;
    if (btnScreenshot !== null) {
      btnScreenshot.style.display = "block";
    }
  }

  redBg = () => {
    this.mainWrapperRef.current.classList.add("bg-danger");
    this.alertWrapperRef.current.classList.add("bg-danger");
  }

  stroboBg = () => {
    this.mainWrapperRef.current.classList.toggle("bg-white");
    this.alertWrapperRef.current.classList.toggle("bg-white");
  }

  restoreBg = () => {
    this.mainWrapperRef.current.classList.remove("bg-danger");
    this.alertWrapperRef.current.classList.remove("bg-danger");
  }

  render() {
    return (
      <Container fluid={true}>
        <Row className="mt-0">
          <Col className="bg-success" md={4} sm={12}></Col>
          <Col className="bg-light" md={4} sm={12}></Col>
          <Col className="bg-danger" md={4} sm={12}></Col>
          <p></p>
        </Row>

        <Hero title={this.props.title} subTitle={this.props.subTitle} text={this.props.text} />

        <Row ref={this.alertWrapperRef} className="bg-white">
          <Col md={3} sm={0}></Col>
          <Col md={6} sm={12}>
            <div ref={this.alertRef} id="myAlert" className="mw-75 alert alert-danger"> <strong>ATTENZIONE!</strong> Per proseguire devi pagare 49 milioni di euro! <button onClick={this.toggleAlert} id="btnClose">&times;</button></div>
          </Col>
          <Col md={3} sm={0}></Col>
        </Row>

        <Row ref={this.mainWrapperRef} id="randomize" className="bg-white">
          <div className="container">
            <Row>
              <Col md={3} sm={0}></Col>
              <Col md={6} sm={6}>
                <div ref={this.screenshotRef} id="toScreenshot">
                  <img className="mt-4 salvini" src={SalviniFace} alt="Salvini's face" />
                  <div ref={this.machineRef} id="machine" className="randomizeMachine mx-auto p-0" md={4} sm={12}>
                    <div><img src={Dress0} alt="salvini dress 0" /></div>
                    <div><img src={Dress1} alt="salvini dress 1" /></div>
                    <div><img src={Dress2} alt="salvini dress 3" /></div>
                    <div><img src={Dress3} alt="salvini dress 2" /></div>
                    <div><img src={Dress4} alt="salvini dress 4" /></div>
                    <div><img src={Dress5} alt="salvini dress 5" /></div>
                    <div><img src={Dress6} alt="salvini dress 6" /></div>
                    <div><img src={Dress7} alt="salvini dress 7" /></div>
                    <div><img src={Dress8} alt="salvini dress 8" /></div>
                    <div><img src={Dress9} alt="salvini dress 9" /></div>
                    <div><img src={Dress10} alt="salvini dress 10" /></div>
                    <div><img src={Dress11} alt="salvini dress 11" /></div>
                    {/* <div><img src={Dress12} alt="salvini dress 12" /></div>
                      <div><img src={Dress13} alt="salvini dress 13" /></div>
                      <div><img src={Dress14} alt="salvini dress 14" /></div>
                      <div><img src={Dress15} alt="salvini dress 15" /></div>
                      <div><img src={Dress16} alt="salvini dress 16" /></div>
                      <div><img src={Dress17} alt="salvini dress 17" /></div>
                      <div><img src={Dress18} alt="salvini dress 18" /></div>
                      <div><img src={Dress19} alt="salvini dress 19" /></div>
                      <div><img src={Dress20} alt="salvini dress 20" /></div>
                      <div><img src={Dress21} alt="salvini dress 21" /></div>
                      <div><img src={Dress22} alt="salvini dress 22" /></div>
                      <div><img src={Dress23} alt="salvini dress 23" /></div>
                      <div><img src={Dress24} alt="salvini dress 24" /></div>
                      <div><img src={Dress25} alt="salvini dress 25" /></div>
                      <div><img src={Dress26} alt="salvini dress 26" /></div>
                      <div><img src={Dress27} alt="salvini dress 27" /></div>
                      <div><img src={Dress28} alt="salvini dress 28" /></div>
                      <div><img src={Dress29} alt="salvini dress 29" /></div>
                      <div><img src={Dress30} alt="salvini dress 30" /></div>
                      <div><img src={Dress31} alt="salvini dress 31" /></div>
                      <div><img src={Dress32} alt="salvini dress 32" /></div>
                      <div><img src={Dress33} alt="salvini dress 33" /></div>
                      <div><img src={Dress34} alt="salvini dress 34" /></div>
                      <div><img src={Dress35} alt="salvini dress 35" /></div>
                      <div><img src={Dress36} alt="salvini dress 36" /></div>
                      <div><img src={Dress37} alt="salvini dress 37" /></div>
                      <div><img src={Dress38} alt="salvini dress 38" /></div>
                      <div><img src={Dress39} alt="salvini dress 39" /></div>
                      <div><img src={Dress40} alt="salvini dress 40" /></div>
                      <div><img src={Dress41} alt="salvini dress 41" /></div>
                      <div><img src={Dress42} alt="salvini dress 42" /></div>
                      <div><img src={Dress43} alt="salvini dress 43" /></div>
                      <div><img src={Dress44} alt="salvini dress 44" /></div>
                      <div><img src={Dress45} alt="salvini dress 45" /></div>
                      <div><img src={Dress46} alt="salvini dress 46" /></div>
                      <div><img src={Dress47} alt="salvini dress 47" /></div>
                      <div><img src={Dress48} alt="salvini dress 48" /></div>
                      <div><img src={Dress49} alt="salvini dress 49" /></div>
                      <div><img src={Dress50} alt="salvini dress 50" /></div>
                      <div><img src={Dress51} alt="salvini dress 51" /></div>
                      <div><img src={Dress52} alt="salvini dress 52" /></div>
                      <div><img src={Dress53} alt="salvini dress 53" /></div>
                      <div><img src={Dress54} alt="salvini dress 54" /></div>
                      <div><img src={Dress55} alt="salvini dress 55" /></div>
                      <div><img src={Dress56} alt="salvini dress 56" /></div>
                      <div><img src={Dress57} alt="salvini dress 57" /></div>
                      <div><img src={Dress58} alt="salvini dress 58" /></div>
                      <div><img src={Dress59} alt="salvini dress 59" /></div>
                      <div><img src={Dress60} alt="salvini dress 60" /></div>
                      <div><img src={Dress61} alt="salvini dress 61" /></div>
                      <div><img src={Dress62} alt="salvini dress 62" /></div>
                      <div><img src={Dress63} alt="salvini dress 63" /></div>
                      <div><img src={Dress64} alt="salvini dress 64" /></div>
                      <div><img src={Dress65} alt="salvini dress 65" /></div>
                      <div><img src={Dress66} alt="salvini dress 66" /></div>
                      <div><img src={Dress67} alt="salvini dress 67" /></div>
                      <div><img src={Dress68} alt="salvini dress 68" /></div>
                      <div><img src={Dress69} alt="salvini dress 69" /></div>
                      <div><img src={Dress70} alt="salvini dress 70" /></div>
                      <div><img src={Dress71} alt="salvini dress 71" /></div>
                      <div><img src={Dress72} alt="salvini dress 72" /></div>
                      <div><img src={Dress73} alt="salvini dress 73" /></div>
                      <div><img src={Dress74} alt="salvini dress 74" /></div>
                      <div><img src={Dress75} alt="salvini dress 75" /></div>
                      <div><img src={Dress76} alt="salvini dress 76" /></div>
                      <div><img src={Dress77} alt="salvini dress 77" /></div>
                      <div><img src={Dress78} alt="salvini dress 78" /></div>
                      <div><img src={Dress79} alt="salvini dress 79" /></div>
                      <div><img src={Dress80} alt="salvini dress 80" /></div>
                      <div><img src={Dress81} alt="salvini dress 81" /></div>
                      <div><img src={Dress82} alt="salvini dress 82" /></div>
                      <div><img src={Dress83} alt="salvini dress 83" /></div>
                      <div><img src={Dress84} alt="salvini dress 84" /></div>
                      <div><img src={Dress85} alt="salvini dress 85" /></div>
                      <div><img src={Dress86} alt="salvini dress 86" /></div>
                      <div><img src={Dress87} alt="salvini dress 87" /></div>
                      <div><img src={Dress88} alt="salvini dress 88" /></div>
                      <div><img src={Dress89} alt="salvini dress 89" /></div>
                      <div><img src={Dress90} alt="salvini dress 90" /></div> */}
                  </div>
                  <div id="ken" className=""><img src={Naked} alt="salvini naked" /></div>
                  <div ref={this.bodyRef}><img src={this.state.dresses[this.state.currentDress]} alt="DRESS" /></div>
                </div>
              </Col>
              <Col className="machineResult" md={3} sm={6}>
                <p ref={this.salviniNameRef} id="machine2Result"> </p>
                <div className="">
                  <button ref={this.randomBtnRef} id="randomizeButton" className="btn btn-danger btn-circle shadow-lg" type="button" onClick={this.onSpinClick} disabled={this.state.disableSpin}>Spin!</button>
                  <button ref={this.saveBtnRef} id="btnScreenshot" className="btn btn-primary btn-flex mt-4" type="button" onClick={this.screenshot} >Salva il tuo Salvini</button>
                  <div className="fb-share-button" data-href="https://www.salvinification.it" data-layout="button" data-size="large" data-mobile-iframe="true">
                    <button type="button" className="btn btn-primary text-center" id="btnShare">
                      <img src="img/fbicon.png" alt="facebook icon" id="fbicon" />
                      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.salvinification.it%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore" id="aShare">Condividi</a>
                    </button>
                  </div>
                  <a id="btnTweet" className="twitter-share-button" href="https://twitter.com/intent/tweet?text=Gira%20la%20ruota%20e%20scopri%20quale%20divisa%20indosserà%20ogg%20il%20ministro%20Salvini%20per%20salvare%20il%20paese%20" data-size="large">Tweet</a>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    );
  }

  imageToName = (i) => {
    var name = "";
    switch (i) {
      case 0:
        name = "Spock-vini";
        break;
      case 1:
        name = "S.W.A.Tvini";
        break;
      case 2:
        name = "Salvini carramba";
        break;
      case 3:
        name = "Salvini ufficiale";
        break;
      case 4:
        name = "Salvini pulotto";
        break;
      case 5:
        name = "Nostromo Salvini";
        break;
      case 6:
        name = "Salvini the templar";
        break;
      case 7:
        name = "Salvini barracellare";
        break;
      case 8:
        name = "Salvini guardia svizzera";
        break;
      case 9:
        name = "Salvini cheerleader";
        break;
      case 10:
        name = "SALVINI FINANZIERE!!!";
        break;
      case 11:
        name = "AstroSalvini";
        break;
      // case 12:
      //   name = "Salvini texas ranger";
      //   break;
      // case 13:
      //   name = "Sal-vigile";
      //   break;
      // case 14:
      //   name = "Obi Wan Salvobi";
      //   break;
      // case 15:
      //   name = "Salvininja";
      //   break;
      // case 16:
      //   name = "Mr. Salvastic";
      //   break;
      // case 17:
      //   name = "Salvini pompiere";
      //   break;
      // case 18:
      //   name = "Fra' Salvini";
      //   break;
      // case 19:
      //   name = "Salvini MigrantBuster";
      //   break;
      // case 20:
      //   name = "RoboSalvini";
      //   break;
      // case 21:
      //   name = "Salvini Garibaldino";
      //   break;
      // case 22:
      //   name = "Salvinion";
      //   break;
      // case 23:
      //   name = "Power Salving";
      //   break;
      // case 24:
      //   name = "Salvini centurione";
      //   break;
      // case 25:
      //   name = "Sailor-Ministro";
      //   break;
      // case 26:
      //   name = "Super Salvyan";
      //   break;
      // case 27:
      //   name = "Salvini globe trotter";
      //   break;
      // case 28:
      //   name = "Salvinella";
      //   break;
      // case 29:
      //   name = "Salvini baywatch";
      //   break;
      // case 30:
      //   name = "Kobra Kai Salvini";
      //   break;
      // case 31:
      //   name = "Scottish Salvini";
      //   break;
      // case 32:
      //   name = "Royal Salvini";
      //   break;
      // case 33:
      //   name = "Salvini Mr.Bean";
      //   break;
      // case 34:
      //   name = "Scoutvini";
      //   break;
      // case 35:
      //   name = "Salvini amazone";
      //   break;
      // case 36:
      //   name = "Salvini He-Man";
      //   break;
      // case 37:
      //   name = "Buzz Salvaightyear";
      //   break;
      // case 38:
      //   name = "Salvini Austin Powers";
      //   break;
      // case 39:
      //   name = "SSalvini";
      //   break;
      // case 40:
      //   name = "Salvini Balotelli";
      //   break;
      // case 41:
      //   name = "Salvini Ladro";
      //   break;
      // case 42:
      //   name = "Shaolvini";
      //   break;
      // case 43:
      //   name = "Iron Salvini";
      //   break;
      // case 44:
      //   name = "Salvini CRI";
      //   break;
      // case 45:
      //   name = "Soviet Salvini";
      //   break;
      // case 46:
      //   name = "Cardinal Salvini";
      //   break;
      // case 47:
      //   name = "Moschettier Salvini";
      //   break;
      // case 48:
      //   name = "Salvy Potter";
      //   break;
      // case 49:
      //   name = "Salvini Adrian";
      //   break;
      // case 50:
      //   name = "Salvini torero";
      //   break;
      // case 51:
      //   name = "Sambini";
      //   break;
      // case 52:
      //   name = "Salvini teletubbie";
      //   break;
      // case 53:
      //   name = "Sheldini";
      //   break;
      // case 54:
      //   name = "Salvaddin";
      //   break;
      // case 55:
      //   name = "Sulk";
      //   break;
      // case 56:
      //   name = "Salvini Uzumaki";
      //   break;
      // case 57:
      //   name = "Wolverini";
      //   break;
      // case 58:
      //   name = "Salvitama";
      //   break;
      // case 59:
      //   name = "Sandalf";
      //   break;
      // case 60:
      //   name = "Salvigolas";
      //   break;
      // case 61:
      //   name = "Cetriolo Salvini";
      //   break;
      // case 62:
      //   name = "Salvini aggiustatutto";
      //   break;
      // case 63:
      //   name = "Rick Salvchez";
      //   break;
      // case 64:
      //   name = "Salvini Auditore";
      //   break;
      // case 65:
      //   name = "Papa Salvesco";
      //   break;
      // case 66:
      //   name = "Regina Elisalvetta";
      //   break;
      // case 67:
      //   name = "Salvini cappello di paglia";
      //   break;
      // case 68:
      //   name = "Buddhini";
      //   break;
      // case 69:
      //   name = "Salvini Bonaparte";
      //   break;
      // case 70:
      //   name = "Salzinga";
      //   break;
      // case 71:
      //   name = "Salvini Morpheus";
      //   break;
      // case 72:
      //   name = "Gargalvini";
      //   break;
      // case 73:
      //   name = "Salvini Attila";
      //   break;
      // case 74:
      //   name = "Spider-salv";
      //   break;
      // case 75:
      //   name = "Super Salvini";
      //   break;
      // case 76:
      //   name = "Salvini Zenigata";
      //   break;
      // case 77:
      //   name = "Banda Salvotti";
      //   break;
      // case 78:
      //   name = "Salvini Team Rocket";
      //   break;
      // case 79:
      //   name = "Salvini Kill-Bill";
      //   break;
      // case 80:
      //   name = "Salvini style!";
      //   break;
      // case 81:
      //   name = "Salvini Maui";
      //   break;
      // case 82:
      //   name = "Salvv Branningan";
      //   break;
      // case 83:
      //   name = "Salvini il barbaro";
      //   break;
      // case 84:
      //   name = "Salvini Dio della guerra";
      //   break;
      // case 85:
      //   name = "Salvini ebbasta";
      //   break;
      // case 86:
      //   name = "BIG SALVO";
      //   break;
      // case 87:
      //   name = "Savlini Borat";
      //   break;
      // case 88:
      //   name = "Salvin Presley";
      //   break;
      // case 89:
      //   name = "Salvini Hutton";
      //   break;
      // case 90:
      // case -1:
      //   name = "Ronald Mc'Salvin";
      //   break;
      default:
        name = "&nbsp;";
    }
    return name;
  }
}

export default SalvinificationPage;

