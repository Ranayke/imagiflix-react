import React from 'react';

import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  return (
    <div className="m-auto antialiased font-sans bg-black text-white">
      <Hero />
      <NavBar />
      <Carousel />
    </div>
  );
}

export default App;
