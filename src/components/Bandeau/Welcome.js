import React from "react";

import "./Welcome.css"
import Test from "../../assets/images/Test.png"
import WorkerImg from "../../assets/images/worker.jpg"
import About from "./About"

const Welcome = ({ element }) => {
    return(
        <>
        <div id="enteteWelcome">
            <label> FABIEN ET ALEX</label>
            <img id="imgLogoWelcome" src={Test} alt="logoTCE"></img>
            <label> TCE Tout Travaux - Rénovations</label>
        </div>
        <label id="lblEquipe">L'ÉQUIPE</label>
        <div id="Presentation">
            <div className="Partie_Personne">
                <img id="photoFab" src={WorkerImg} alt="imgFabien"></img>
                <About></About>
            </div>
            <div className="Partie_Personne">
                <img id="photoAlex" src={WorkerImg} alt="imgAlex"></img>
                <About></About>
            </div>
        </div>
        </>
    )
}

export default Welcome