import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import img1 from "../../assets/images/img1.jpg"
import img2 from "../../assets/images/img2.jpg"
import img3 from "../../assets/images/img3.jpg"
import "./Carousel.css"

export default function Caroupoivre() {
    return (
        <div className='carousel-roote'>
            <Carousel>
                {[img1, img2, img3].map((each, index) => (
                    <div id='CarouselDiv' key={`carrousel_key_${index}`}>
                        <img src={each} alt="Tableau"/>
                        <p className="legend">Couille {index}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}


