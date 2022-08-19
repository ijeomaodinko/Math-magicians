import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.PureComponent {
  render() {
    return (
      <nav className="mNav">
        <h1 className="menuTitle">
          Math Magicians
        </h1>
        <div className="menuContainer">
          <ul className="menuList">
            <li><Link className="menui vertical" to="/">Home</Link></li>
            <li><Link className="menui vertical" to="/Calculator">Calculator</Link></li>
            <li><Link className="menui vertical" to="/Quotes">Quotes</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
