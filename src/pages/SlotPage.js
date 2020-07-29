import React from "react";
import { SpinningWheel } from "react-random-selection-wheel";

const wheelOptions = {
  1: {
    image: "./foo.jpg",
    result: "./foo.jpg"
  },
  2: {
    image: "./bar.jpg",
    result: "./bar.jpg"
  }
}
 
// React.render(
//   <SpinningWheel
//     sources={wheelOptions}
//     displayResult={this.display.bind(this)}
//   />
// );

class Spinner extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  displayResult(spinResult) {
    return <img src={`${spinResult}`} alt={"result"} />
  }

  render() {
    return(
      <SpinningWheel
        sources={wheelOptions}
        displayResult={this.display.bind(this)}
      />
    );
  }
}

export default Spinner;