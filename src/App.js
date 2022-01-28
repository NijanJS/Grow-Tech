import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import Home from './pages/Home';
import './index.css';
import aos from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    aos.init({ easing: 'ease', duration: 700, once: true });
  });
  return (
    <div className="app w-screen h-full">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
