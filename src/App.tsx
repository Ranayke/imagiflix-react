import React, { useState, useEffect } from "react";

import axios from "axios";

import { URL, APISTRING } from "./data/constants";

import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "./components/Loading";

const App = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [series, setSeries] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const moviesUrl = `${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`;
  const seriesUrl = `${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesData = await axios.get(moviesUrl);
        setMovies(moviesData.data.results);

        const seriesData = await axios.get(seriesUrl);
        setSeries(seriesData.data.results);
      } catch (error) {
        setMovies([]);
        setSeries([]);
      }
    };

    fetchData();
    setLoading(false);
  }, [moviesUrl, seriesUrl]);

  const getFeaturedMovie = () => movies && movies[0];

  const getMovieList = () => {
    if (movies) {
      const [...movieList] = movies;
      return movieList;
    }
    return [];
  };

  return (
    <div className="m-auto antialiased font-sans bg-black text-white">
      {loading ? (
        <Loading title="Carregando..." />
      ) : (
        <Hero {...getFeaturedMovie()} />
      )}
      <NavBar />
      <Carousel title="Filmes Populares" data={getMovieList()} />
      <Carousel title="Séries Populares" data={series} />
      <Carousel title="Placeholder" />
      <Footer />
    </div>
  );
};

export default App;
