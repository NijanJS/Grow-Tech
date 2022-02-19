import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { navlinks } from './../constants/constants';
import '../assets/styles/components.css';
import Button from './Button';
import { FaHamburger, FaStackOverflow } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
function Navbar() {
  useEffect(() => {
    var menu = document.querySelector('.burger-menu');
    var nav = document.querySelector('.navigation');
    menu.addEventListener('click', () => {
      nav.classList.toggle('toggle');
    });
  });
  return (
    <>
      <div className="burger-menu">
        <GiHamburgerMenu />
      </div>
      <div className="navigation py-2 flex min-w-full h-20 w-screen justify-center absolute z-10">
        <div className="navbar w-full flex h-full justify-between text-white ">
          <div className="logo">
            <Link to="/Grow-Tech/">
              <img src={logo} alt="" className="logo_img" />
            </Link>
          </div>
          <ul className="navmenu row flex space-x-12 items-center">
            {navlinks.map((link, id) => (
              <Link
                className="link px-3 py-2 flex items-center justify-center "
                key={id}
                to={`Grow-Tech${link.path}`}>
                {link.title}
              </Link>
            ))}
            <Link to={'Grow-Tech/contact'}>
              <Button title="Contact Us" styles="rounded-full nav-btn" />
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
