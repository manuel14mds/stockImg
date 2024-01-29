'use client'
import React, { useState } from 'react';
import Slide from './Slide/Slide';

function Slider({ slides }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className="relative w-full h-auto overflow-hidden" role='banner'>
            <div className="flex w-full " >
                <div className="flex-shrink-0 w-full transition duration-500 ease-in-out transform">
                    <Slide 
                        image={slides[currentSlide].image} 
                        title={slides[currentSlide].title} 
                        description={slides[currentSlide].description} 
                    />
                </div>
            </div>
            <button onClick={prevSlide} className="absolute top-1/2 left-2 z-10 bg-white rounded-full p-2">
                {'<'}
                {/* Icono o texto para Prev */}
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-2 z-10 bg-white rounded-full p-2">
                {'>'}
                {/* Icono o texto para Next */}
            </button>
        </div>
    );
}

export default Slider;
