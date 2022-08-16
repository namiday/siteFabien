import React from "react";

import Test from "../../assets/images/Test.png"
import WorkerImg from "../../assets/images/worker.jpg"
import About from "./About"

import "./Welcome.css"

export default function Welcome() {
    return(
        <>
            <div id="enteteWelcome">
                <label> FABIEN ET ALEX</label>
                <img id="imgLogoWelcome" src={Test} alt="logoTCE" />
                <label> TCE Tout Travaux - Rénovations</label>
            </div>
            <label id="lblEquipe">L'ÉQUIPE</label>
            <div id="Presentation">
                <div className="Partie_Personne">
                    <img id="photoFab" src={WorkerImg} alt="imgFabien"></img>
                    <About />
                </div>
                <div className="Partie_Personne">
                    <img id="photoAlex" src={WorkerImg} alt="imgAlex"></img>
                    <About />
                </div>
            </div>
        </>
    )
}
