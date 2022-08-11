// import React from 'react';
import React from 'react';
import Calculator from './components/Calculator';
import './components/Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<Calculator />);
  }
}

export default App;
