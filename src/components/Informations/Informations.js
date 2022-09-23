import React from "react";

import Phone from "../../assets/icons/phone.png"
import Mail from "../../assets/icons/mail.png"
import Marker from "../../assets/icons/marker.png"

import "./Informations.css"

const Informations = () => {
    return(
        <>
            <div id="divInformations">
                <label id="lblCoor">Coordonnées</label>
                <div id="divCenteredInfos">
                    <div className="classDivCoord"><img src={Mail} alt="IconsMail"/><label className="lblInfos">Tce.proreno@gmail.com</label></div>
                    <div className="classDivCoord"><img src={Phone} alt="IconsPhone"/><label className="lblInfos">0611223344</label></div>
                    <div className="classDivCoord"><img src={Marker} alt="IconsMarker"/><label className="lblInfos">Mareuil-sur-Ourcq</label></div>
                </div>
            </div>
        </>
    )
}

export default Informations;