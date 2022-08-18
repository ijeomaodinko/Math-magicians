import React from 'react';

class Quotes extends React.PureComponent {
  render() {
    return (
      <div>
        <h2>Welcome to our page!</h2>
        <p className="quote">
          <span className="quoteMath">Mathematics</span>
          is not about numbers, equations,
          computations, or algorithms: it is about
          <span className="quoteMath"> understanding.</span>
          <br />
          (William Paul Thurston)
        </p>
      </div>
    );
  }
}
export default Quotes;
