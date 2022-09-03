import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../assets/images/img1.jpg"
import img2 from "../../assets/images/img2.jpg"
import img3 from "../../assets/images/img3.jpg"
import slide1 from "../../assets/images/slide1.png"
import slide2 from "../../assets/images/slide2.png"
import slide3 from "../../assets/images/slide3.png"
import "./Carousel.css"

const listeImages = [
    slide1,
    slide2,
    slide3,
    img1,
    img2,
    img3
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

