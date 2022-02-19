import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Pattern from '../../assets/images/Pattern.png';
import { Link } from 'react-router-dom';

function Contact({ text, subtext }) {
  return (
    <div className="w-screen h-full flex justify-center items-center my-10">
      <div className="w-5/6 bg-blue py-20 rounded-2xl relative">
        <img className="pattern absolute top-0" src={Pattern} />
        <img
          className="pattern absolute bottom-0 right-0 rotate-180"
          src={Pattern}
        />
        <div className="box flex flex-col text-center justify-center items-center gap-5">
          <span className="font-medium text-mlg text-white">
            {text}
            <br />
            {subtext}
          </span>
          <Link to="contact">
            <button className="btn flex justify-center items-center gap-2">
              Let's Talk <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
