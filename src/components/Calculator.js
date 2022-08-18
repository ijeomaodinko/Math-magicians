import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickHandle = (event) => {
    setState((prevState) => calculate(prevState, event.target.textContent));
  };

  return (
    <div className="wrapper">
      <div className="screen">
        <span className="input">{state.total}</span>
        <span className="input">{state.operation}</span>
        <span className="input">{state.next}</span>
      </div>
      <div className="button-box">
        <button type="button" onClick={clickHandle} className="allClear">AC</button>
        <button type="button" onClick={clickHandle} className="plusMinus">+/-</button>
        <button type="button" onClick={clickHandle} className="percent">%</button>
        <button type="button" onClick={clickHandle} className="divide last">÷</button>
        <br />

        <button type="button" onClick={clickHandle} className="seven">7</button>
        <button type="button" onClick={clickHandle} className="eight">8</button>
        <button type="button" onClick={clickHandle} className="nine">9</button>
        <button type="button" onClick={clickHandle} className="multiply last">x</button>
        <br />

        <button type="button" onClick={clickHandle} className="four">4</button>
        <button type="button" onClick={clickHandle} className="five">5</button>
        <button type="button" onClick={clickHandle} className="six">6</button>
        <button type="button" onClick={clickHandle} className="subtract last">-</button>
        <br />

        <button type="button" onClick={clickHandle} className="one">1</button>
        <button type="button" onClick={clickHandle} className="two">2</button>
        <button type="button" onClick={clickHandle} className="three">3</button>
        <button type="button" onClick={clickHandle} className="add  last">+</button>
        <br />

        <button type="button" onClick={clickHandle} className="zero">0</button>
        <button type="button" onClick={clickHandle} className="point">.</button>
        <button type="button" onClick={clickHandle} className="equalto  last">=</button>
      </div>
    </div>
  );
}

export default Calculator;
