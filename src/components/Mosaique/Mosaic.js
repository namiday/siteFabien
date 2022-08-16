import React from "react"
import "./Mosaic.css"
import Caroupoivre from "./Carousel.js";


export default function Mosaic() { 
    return (
        <>
            <div id="divLabelGallerie">
                <label>GALERIE</label>
            </div>
            <div>
                <Caroupoivre></Caroupoivre>
            </div>
        </>
    );
}
