import React from "react";

import "./Welcome.css"
import Logo from "../../assets/images/logo.svg"
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
        <div id="Presentation">
            <div id="Partie_Fabien">
                <img id="photoFab" src={WorkerImg} alt="imgFabien"></img>
                <About></About>
            </div>
            <div id="Partie_Alex">
                <img id="photoAlex" src={WorkerImg} alt="imgFabien"></img>
                <About></About>
            </div>
        </div>
        </>
    )
}

export default Welcome