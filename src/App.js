import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import Home from './pages/Home';
import './index.css';
import aos from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Footer from './components/Footer';
import Services from './pages/Services';
import Works from './pages/Works';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import { FaArrowUp } from 'react-icons/fa';
import "./assets/styles/responsive.css"
import Loader from './components/Loader';
function App() {
  const [load, setLoad]=useState(true);
  useEffect(() => {
    aos.init({ easing: 'ease', duration: 700 });
    setTimeout(() => {
      setLoad(false);
    }, 4100);
    window.onscroll = () => {
      if (window.scrollY > 400) {
        document.querySelector('.scroll-top').style.display = 'block';
      } else {
        document.querySelector('.scroll-top').style.display = 'none';
      }
    };
  }, []);
  
  return (
    <>
      <div className="app w-screen h-full">
        {load?(<Loader/>):(<>
          <Navbar />
        <Routes>
          <Route element={<Home />} path="Grow-Tech/" />
          <Route element={<About />} path="Grow-Tech/about" />
          <Route element={<Services />} path="Grow-Tech/services" />
          <Route element={<Works />} path="Grow-Tech/works" />
          <Route element={<Careers />} path="Grow-Tech/careers" />
          <Route element={<Contact />} path="Grow-Tech/contact" />
        </Routes>
        <Footer />
        <button
          onClick={() => window.scrollTo({ top: '0' })}
          className="scroll-top text-white text-lg bg-blue p-5 w-100 h-100 fixed bottom-10 right-10 rounded-full z-10">
          <FaArrowUp />
        </button>
        </>)}
        
      </div>
    </>
  );
}

export default App;
