import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { URL, APISTRING } from './data/constants';

import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const [ movies, setMovies ] = useState<any[]>([]);
  const url = `${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setMovies(response.data.results);
      } catch (error) {
        setMovies([])
      }
    }

    fetchData();
  }, [url]);

  return (
    <div className="m-auto antialiased font-sans bg-black text-white">
      <Hero {...movies[0]}/>
      <NavBar />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
};

export default App;
