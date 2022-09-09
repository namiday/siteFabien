import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slide1 from "../../assets/images/slide1.jpg"
import slide2 from "../../assets/images/slide2.jpg"
import "./Carousel.css"

const listeImages = [
    slide1,
    slide2
];


export class Caroupoivre extends Component {
    render() {
        return (
            <div className='classCarouselRoot'>
                <Carousel>
                    {listeImages.map((each, index) => (
                        <div id='divCarousel' key={index}>
                            <img  style={{ width: "100%" }} src={each} alt="Tableau"/>
                            <p className="legend">Image {index}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        );
    }
}
;

