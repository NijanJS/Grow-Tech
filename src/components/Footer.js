import React from 'react';
import logo from '../assets/images/GrowTech.png';
import { navlinks, services, socialLinks } from '../constants/constants';
import { quickLinks } from '../constants/constants';
import { MdEmail, MdPhone, MdPinDrop } from 'react-icons/md';
import { BsPinMap } from 'react-icons/bs';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="footer w-screen h-full flex flex-col justify-around items-center bg-cream ">
      <div className="footer-sec w-5/6 flex flex-row justify-around items-center px-5 mt-20">
        <div className="section  ">
          <div className="logo ">
            <img src={logo} />
          </div>
          <p className="text-grey w-3/5 desc">
            We help you to think build and grow our business. Digitalizing your
            business is must in this era.
          </p>
        </div>
        <div className="section ">
          <span className="text-head font-medium">Quick Links</span>
          <div className="links">
            {quickLinks.map((service, id) => (
              <Link to={`Grow-Tech${service.path}`} key={id}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="section ">
          <span className="text-head font-medium">Services</span>
          <div className="links">
            {services.map((service, id) => (
              <li key={id}>{service.title}</li>
            ))}
          </div>
        </div>
        <div className="section">
          <span className="text-head font-medium">Reach Us</span>
          <div className="links font-medium">
            <span className="email flex gap-2 items-center">
              <MdEmail />
              <a href="mailat:hr@growtech.com.np">hr@growtech.com.np</a>
            </span>
            <span className="phone flex gap-2 items-center">
              <MdPhone /> <span>+91 98765 43210</span>
            </span>
            <span className="address flex gap-2 items-center">
              <MdPinDrop /> <span>Babarmahal, Kathmandu, Nepal</span>
            </span>
            <div className="social-links flex w-full items-start gap-5 mt-3">
              {socialLinks.map((social, id) => (
                <a
                  key={id}
                  target="_blank"
                  className="w-8 h-8 text-xl rounded-full bg-blue flex items-center justify-center text-white"
                  href={social.link}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bottom w-5/6 flex flex-row justify-between items-center mb-10">
        <span className="text-grey copyright">
          ©️ 2021 <strong className="text-blue">GrowTech</strong>. All rights
          reserved
        </span>
        <span style={{ color: '#374253' }} className="links-company">
          <a href="/" target="_blank">
            Terms & Conditions
          </a>{' '}
          |{' '}
          <a href="/" target="_blank">
            {' '}
            Company Profile{' '}
          </a>{' '}
          |{' '}
          <a href="/" target="_blank">
            {' '}
            Privacy Policy{' '}
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
