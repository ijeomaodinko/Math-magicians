import React from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle = (event) => {
    const calc = calculate(this.state, event.target.textContent);
    this.setState(calc);
  };

  render() {
    const {
      total,
      next,
      operation,
    } = this.state;

    return (
      <div className="imenu">
        <div>
          <h2 className="menup">Let&apos;s do some Math</h2>
        </div>
        <div className="wrapper">
          <div className="screen">
            <span className="input">{total}</span>
            <span className="input">{operation}</span>
            <span className="input">{next}</span>
          </div>
          <div className="button-box">
            <button type="button" onClick={this.clickHandle} className="allClear">AC</button>
            <button type="button" onClick={this.clickHandle} className="plusMinus">+/-</button>
            <button type="button" onClick={this.clickHandle} className="percent">%</button>
            <button type="button" onClick={this.clickHandle} className="divide last">÷</button>
            <br />

            <button type="button" onClick={this.clickHandle} className="seven">7</button>
            <button type="button" onClick={this.clickHandle} className="eight">8</button>
            <button type="button" onClick={this.clickHandle} className="nine">9</button>
            <button type="button" onClick={this.clickHandle} className="multiply last">x</button>
            <br />

            <button type="button" onClick={this.clickHandle} className="four">4</button>
            <button type="button" onClick={this.clickHandle} className="five">5</button>
            <button type="button" onClick={this.clickHandle} className="six">6</button>
            <button type="button" onClick={this.clickHandle} className="subtract last">-</button>
            <br />

            <button type="button" onClick={this.clickHandle} className="one">1</button>
            <button type="button" onClick={this.clickHandle} className="two">2</button>
            <button type="button" onClick={this.clickHandle} className="three">3</button>
            <button type="button" onClick={this.clickHandle} className="add  last">+</button>
            <br />

            <button type="button" onClick={this.clickHandle} className="zero">0</button>
            <button type="button" onClick={this.clickHandle} className="point">.</button>
            <button type="button" onClick={this.clickHandle} className="equalto  last">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
