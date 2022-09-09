import React from "react";
import { Caroupoivre } from "./Carousel.js";
import "./Welcome.css"
import LogoTCE from "../../assets/images/logo_tce.jpg"
import img1 from "../../assets/images/headerImg/jpg7.jpg"
import img2 from "../../assets/images/headerImg/jpg8.jpg"
import img3 from "../../assets/images/headerImg/jpg10.jpg"
import img4 from "../../assets/images/headerImg/jpg2.jpg"


const Welcome = () => {
    return(
        <>
        <span className="anchorHidden" id="anchorWelcome" />
        <div id="headerWelcome">
            <label> FABIEN ET ALEX</label>
            <label> TCE Tout Travaux - Rénovations</label>
        </div>
        <div id="divWrapperMosaic">
            <div id="divMosaicVideo">
                <div className="classMosaicVideo" ><img title="WorkerMovie1" src={img1} alt="gif TCE 1"/></div>
                <div className="classMosaicVideo" ><img title="WorkerMovie2" src={img2} alt="gif TCE 2"/></div>
                <div className="classMosaicVideo" ><img title="WorkerMovie3" src={img3} alt="gif TCE 3"/></div>
                <div className="classMosaicVideo" ><img title="WorkerMovie4" src={img4} alt="gif TCE 4"/></div>
            </div>
            <img id="imgLogoWelcome" src={LogoTCE} alt="logoTCE"></img>
        </div>
        <div id="divWrapperTeam">
            <label id="lblEquipe">L'ÉQUIPE</label>
            <Caroupoivre/>
        </div>
        </>
    )
}

export default Welcome