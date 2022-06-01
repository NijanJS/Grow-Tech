import React from 'react';
import { BG, Header, Paragraph, SubHeader } from '../../components/contentbox';
import '../../assets/styles/about.css';
import { FaArrowDown } from 'react-icons/fa';
import {Link, animateScroll, scrollSpy} from "react-scroll"

export const ArrowDown = () => {
  return (
    <span className="text-white w-8 h-8  rounded-full flex justify-center items-center bg-red-700">
      <FaArrowDown />
    </span>
  );
};
function Homepage() {
  const src = `https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`;
  return (
    <div className="landing w-screen h-screen flex justify-center items-center">
      <BG styles="opacity-30 left-0 homepage" />
      <div className="page w-5/6 h-full flex justify-evenly items-center">
        <div className="page w-3/5 h-2/6 ml-10 text-section flex flex-col justify-center items-start gap-3 full-width">
          <div className="header page">
            <Header title="We are" styles="text-dark" />
            <Header title="GrowTech." />
          </div>
          <Paragraph
            styles="w-3/5"
            body={`We put passion and pride into what we do. You would like that about us. Scroll down and see why you should like us, too.`}
          />
          <div className="page abt-info container flex min-w-full justify-start mt-3 w-full gap-5">
            <Link smooth to='technologies' className='flex items-center gap-3 cursor-pointer'>
              Technology we use <ArrowDown />
            </Link>
            <Link smooth to='why-choose-us' className='flex items-center gap-3 cursor-pointer'>
              Why Choose Us <ArrowDown />
            </Link>
          </div>
        </div>
        <div className="flex flex-col shadow-lg overflow-hidden main-img">
          <img src={src} className="home-img-max" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
