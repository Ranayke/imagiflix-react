import React from 'react';
import Slick from 'react-slick';

import mockData, { Movie } from '../data/mock';

const Poster = ({ cover, title, score } : Movie, index: number) => (
    <article key={index}>
        <img src={cover} alt={title} />
    </article>
);



interface CarouselData {
    title?: string;
    data?: Movie[];
}

const Carousel = ({ title = 'Carousel', data = mockData } : CarouselData) => {

    const options = {
        infinite: true,
        slidesToScroll: 1,
        variableWidth: true,
/*         prevArrow: '',
        nextArrow: '', */
    };

    return (
        <section className="carousel">
            <h2 className='relative z-10 font-bold text-2xl ml-8'>{title}</h2>
            <Slick className='relative mb-8' {...options}>
                {data.map((movie, index) => Poster(movie, index))}
            </Slick>
        </section>
    );
};

export default Carousel;
