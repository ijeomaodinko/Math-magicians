import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="wrapper">
        <div className="screen">
          <p className="input">{result}</p>
        </div>
        <div className="button-box">
          <button type="button" className="allClear">AC</button>
          <button type="button" className="plusMinus">+/-</button>
          <button type="button" className="percent">%</button>
          <button type="button" className="divide last">÷</button>
          <br />

          <button type="button" className="seven"> 7 </button>
          <button type="button" className="eight"> 8 </button>
          <button type="button" className="nine"> 9 </button>
          <button type="button" className="multiply  last">X</button>
          <br />

          <button type="button" className="four">4</button>
          <button type="button" className="five">5</button>
          <button type="button" className="six">6</button>
          <button type="button" className="subtract last">-</button>
          <br />

          <button type="button" className="one">1</button>
          <button type="button" className="two">2</button>
          <button type="button" className="three">3</button>
          <button type="button" className="add  last">+</button>
          <br />

          <button type="button" className="zero">0</button>
          <button type="button" className="point">.</button>
          <button type="button" className="equalto  last">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
