import React from "react"
import "./Mosaic.css"
import { Caroupoivre } from "./Carousel.js";


const Mosaic = ({sticky}) => (
    <>
        <div id="divLabelGallerie">
            <label>GALLERIE</label>
        </div>
        <div>
            <Caroupoivre></Caroupoivre>
        </div>
    </>

    )
export default Mosaic