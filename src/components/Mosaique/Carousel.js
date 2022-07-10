import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../assets/images/img1.jpg"
import img2 from "../../assets/images/img2.jpg"
import img3 from "../../assets/images/img3.jpg"

const listeImages = [
  img1,
  img2,
  img3
];


export class Caroupoivre extends Component {
    render() {
        return (
            <Carousel width="60%">
                {listeImages.map((each, index) => (
                    <div key={index}>
                        <img  style={{ width: "100%" }} src={each} alt="Tableau"/>
                        <p className="legend">Couille {index}</p>
                    </div>
                ))}
            </Carousel>
        );
    }
}
;

