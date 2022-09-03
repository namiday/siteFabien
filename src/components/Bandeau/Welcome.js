import React from "react";
import { Caroupoivre } from "./Carousel.js";
import "./Welcome.css"
import LogoTCE from "../../assets/images/logo_tce.jpg"
import movie1 from "../../assets/images/travaux1.gif"
import movie2 from "../../assets/images/travaux2.gif"
import movie3 from "../../assets/images/travaux3.gif"
import movie4 from "../../assets/images/travaux4.gif"

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
                <div className="classMosaicVideo" ><img title="WorkerMovie1" src={movie1} alt="gif TCE 1"/></div>
                <div className="classMosaicVideo" ><img title="WorkerMovie2" src={movie2} alt="gif TCE 2"/></div>
                <div className="classMosaicVideo" ><img title="WorkerMovie3" src={movie3} alt="gif TCE 3"/></div>
                <div className="classMosaicVideo" ><img title="WorkerMovie4" src={movie4} alt="gif TCE 4"/></div>
            </div>
            <img id="imgLogoWelcome" src={LogoTCE} alt="logoTCE"></img>
        </div>
        <div>
            <label id="lblEquipe">L'ÉQUIPE</label>
            <Caroupoivre/>
        </div>
        </>
    )
}

export default Welcome