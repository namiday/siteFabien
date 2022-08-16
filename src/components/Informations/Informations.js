import React from "react";

import "./Informations.css"

const Informations = ({ element }) => {
    return(
        <>
            <div id="divInformations">
                <label id="lblCoor">Coordonnées</label>
                <div id="divCenteredInfos">
                <label> Telephone Fabien : 0611223344</label>
                <label> Telephone Alex   : 0711223344</label>
                <label> Localisation :  Mareuil</label>
                <label> Mail Professionnel : mail@Professionnel.com</label>
                </div>
            </div>
        </>
    )
}

export default Informations;