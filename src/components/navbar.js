import React from 'react';
import logo from '../assets/images/logo.png';
import { navlinks } from './../constants/constants';
import '../assets/styles/components.css';
import Button from './Button';
function Navbar() {
  return (
    <div className="navigation py-2 flex min-w-full h-20 w-screen justify-center absolute z-10">
      <div className="navbar w-full flex h-full justify-between text-white ">
        <div className="logo">
          <img src={logo} alt="" className="logo_img" />
        </div>
        <ul className="navmenu row flex space-x-12 items-center">
          {navlinks.map((link, id) => (
            <li
              className="link px-3 py-2 flex items-center justify-center "
              key={id}>
              {link.title}
            </li>
          ))}
          <Button title="Contact Us" styles="rounded-full nav-btn" />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
