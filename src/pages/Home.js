import React from 'react';
import Homepage from './LandingPage/Homepage';
import About from './LandingPage/About';
import '../assets/styles/homepage.css';
import Services from './LandingPage/Services';
import Procedure from './LandingPage/Procedure';
import Projects from './LandingPage/Projects';
import Testimonials from './LandingPage/Testimonials';
import Clients from './LandingPage/Clients';
import Contact from './LandingPage/Contact';
import Footer from '../components/Footer';
function Home() {
  return (
    <div className="home-container min-w-screen max-w-screen w-screen h-full home flex flex-col">
      <Homepage />
      <About />
      <Services />
      <Procedure />
      <Projects />
      <Testimonials />
      <Clients />
      <Contact text={`Let's make something`} subtext={`together`}/>

      {/*
       */}
    </div>
  );
}

export default Home;
