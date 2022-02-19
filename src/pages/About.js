import React from 'react';
import Homepage from './AboutUs/Homepage';
import Info from './AboutUs/Info';
import Techstack from './AboutUs/Techstack';
import '../assets/styles/about.css';
import Indepth from './AboutUs/Indepth';
import { Creation, Reasons } from '../constants/constants';
import Team from './AboutUs/Team';

function About() {
  return (
    <div className="home-container min-w-screen max-w-screen w-screen h-full home flex flex-col">
      <Homepage />
      <Info data={Creation} header="What we create" />
      <Techstack />
      <Info data={Reasons} header="Why choose us" />
      <Indepth />
      <Team />
    </div>
  );
}

export default About;
