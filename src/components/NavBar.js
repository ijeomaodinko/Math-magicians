import React from 'react';
import { Link } from 'react-router-dom';

// const NavBar = () => {
//   const links = [
//     {
//       id: 1,
//       path: '/',
//       text: 'Home',
//     },
//     {
//       id: 2,
//       path: '/Calculator',
//       text: 'Calculator',
//     },
//     {
//       id: 3,
//       path: '/quotes',
//       text: 'Quotes',
//     },
//   ];

//   return (
//     <nav className="navBar">
//       <h1> Math Magicians</h1>
//       <ul className="navList">
//         {links.map((link) => (
//           <li key={link.id}>
//             <NavLink to={link.link}>{link.text}</NavLink>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

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
