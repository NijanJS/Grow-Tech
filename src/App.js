import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import Home from './pages/Home';
import './index.css';
import aos from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './pages/About';
import Footer from './components/Footer';
import Services from './pages/Services';
import Projects from './pages/Works/Projects';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import { FaArrowUp } from 'react-icons/fa';
import "./assets/styles/responsive.css"
import Loader from './components/Loader';
import Products from './pages/Works/Products';
import Product from './pages/Works/components/Product';
function App(props) {
  const location = useLocation();
  const [load, setLoad]=useState(true);
  useEffect(()=>{
    window.scrollTo({top:0, behavior:"auto"});
  },[location])
  useEffect(() => {
    aos.init({ easing: 'ease', duration: 700});
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
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Services />} path="/services" />
          <Route path='/works'>
          <Route element={<Projects />} path="projects" />
          <Route element={<Products />} path="products"/>
          </Route>
          <Route element={<Careers />} path="/careers" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Product />} path="/works/products/:id"/>
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
