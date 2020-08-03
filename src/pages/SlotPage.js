import React from "react";
import ReactDOM from "react-dom";
// import { SpinningWheel } from "react-random-selection-wheel";

// import Dress0 from '../assets/salvinification/0.png';
// import Dress1 from '../assets/salvinification/1.png';

// const wheelOptions = {
//   1: {
//     image: "./foo.jpg",
//     result: "./foo.jpg"
//   },
//   2: {
//     image: "./bar.jpg",
//     result: "./bar.jpg"
//   }
// }
 
// // React.render(
// //   <SpinningWheel
// //     sources={wheelOptions}
// //     displayResult={this.display.bind(this)}
// //   />
// // );

// class Spinner extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   // }

//   displayResult(spinResult) {
//     return <img src={`${spinResult}`} alt={"result"} />
//   }

//   render() {
//     return(
//       <SpinningWheel
//         sources={wheelOptions}
//         displayResult={this.display.bind(this)}
//       />
//     );
//   }
// }

// export default Spinner;

const rootElement = document.getElementById('root')
  
  class SlotPage extends React.Component {
    constructor() {
      super();
      this.state = {
        winner: null
      }
      this.finishHandler = this.finishHandler.bind(this)
    }  
    
    handleClick = () => { 
      this.emptyArray();
      this._child1.forceUpdateHandler();
      this._child2.forceUpdateHandler();
      this._child3.forceUpdateHandler();
    }
    
    static loser = [
      'Not quite', 
      'Stop gambling', 
      'Hey, you lost!', 
      'Ouch! I felt that',      
      'Don\'t beat yourself up',
      'There goes the college fund',
      'I have a cat. You have a loss',
      'You\'re awesome at losing',
      'Coding is hard',
      'Don\'t hate the coder'
    ];

    static matches = [];
    
    finishHandler(value) {
      SlotPage.matches.push(value);
      
      if (SlotPage.matches.length === 3) {
        const { winner } = this.state;
        const first = SlotPage.matches[0];
        let results = SlotPage.matches.every(match => match === first)
        //console.log(SlotPage.matches)
        this.setState({ winner: results });
      }
    }

    emptyArray() {
      SlotPage.matches = [];
    }

    render() {
      const { winner } = this.state;
      const getLoser = () => {       
        return SlotPage.loser[Math.floor(Math.random()*SlotPage.loser.length)]
      }
      
      return (
        <div> 
          <div id="root"></div>
          <h1 style={{ color: 'white'}}>
            Result: <span>{winner === null ? 'Waiting…' : winner ? '🤑 Pure skill! 🤑' : getLoser()}</span>
          </h1>
          
          <div className={`spinner-container`}>
            <Spinner onFinish={this.finishHandler} ref={(child) => { this._child1 = child; }} timer="1000" />
            <Spinner onFinish={this.finishHandler} ref={(child) => { this._child2 = child; }} timer="1400" />
            <Spinner onFinish={this.finishHandler} ref={(child) => { this._child3 = child; }} timer="2200" />
            <div className="gradient-fade"></div>
          </div>
          
          <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
          <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        </div>
      );
    }
  }  
  
  class Spinner extends React.Component {  
    constructor(props){
      super(props);
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    };

    forceUpdateHandler(){
      this.reset();
    }; 
    
    reset() {
      //const { lastPosition } = this.state
      clearInterval(this.timer);
      
      // this.setState({
      //   //position: this.start,
      //   position: lastPosition
      // });
      
      this.timer = setInterval(() => {
        this.tick()
      }, 100);      
    }
  
    state = {
      position: 0,
      lastPosition: null
    }
    static iconHeight = 188;
    multiplier = Math.floor(Math.random()*(4-1)+1);

    start = this.setStartPosition();
    speed = Spinner.iconHeight * this.multiplier;    

    setStartPosition() {
      return ((Math.floor((Math.random()*9))) * Spinner.iconHeight)*-1;
      //return 0;
    }

    moveBackground() {
      this.setState({ 
        position: this.state.position - this.speed,
        timeRemaining: this.state.timeRemaining - 100
      })
    }
  
    getSymbolFromPosition() {
      let { position } = this.state;
      const totalSymbols = 9;
      const maxPosition = (Spinner.iconHeight * (totalSymbols-1)*-1);
      //let moved = position/Spinner.iconHeight*-1;
      let moved = (this.props.timer/100) * this.multiplier
      let startPosition = this.start;
      let currentPosition = startPosition;    
      
//       console.log('---------')
      
//       console.log(`multiplier = ${this.multiplier}`)
//       console.log(`moved = ${moved}`)
//       console.log(`max pos = ${maxPosition}`)
//       console.log(`start pos = ${startPosition}`)
//       console.log('---------')
      
      for (let i = 0; i < moved; i++) {              
        currentPosition -= Spinner.iconHeight;
      
        if (currentPosition < maxPosition) {
          currentPosition = 0;
        }
        //console.log(`currentPosition = ${currentPosition}`)
      }
      
      //this.setState({lastPosition: currentPosition})            
      //this.props.onFinish(1);
      this.props.onFinish(currentPosition);
    }
  
    tick() {      
      if (this.state.timeRemaining <= 0) {
        clearInterval(this.timer);        
        this.getSymbolFromPosition();    
        
      } else {
        this.moveBackground();
      }      
    }
  
    componentDidMount() {
      clearInterval(this.timer);
      
      this.setState({
        position: this.start,
        timeRemaining: this.props.timer
        //timeRemaining: Math.floor(Math.random()*(3000-1000)+1000)
      });
      
      this.timer = setInterval(() => {
        this.tick()
      }, 100);
    }
  
    render() {
      let { position, current } = this.state;   
      
      return (            
        <div 
          style={{backgroundPosition: '0px ' + position + 'px'}}
          className={`icons`}          
        />
      )
    }
  }

  function runSlotPage() {
    ReactDOM.render(
      <SlotPage />,
      rootElement
    )
  }
  
  runSlotPage();

export default SlotPage;