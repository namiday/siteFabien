import React from "react";
import Mosaic from "./Mosaic";
import dataBeton from "./../../assets/beton_cire_images.json";
import dataCarrelage from "./../../assets/carrelage_sdb_images.json";
import dataDevanture from "./../../assets/devanture_images.json";
import dataPeinture from "./../../assets/peinture_hotel_images.json";
import dataRevetement from "./../../assets/revetement_sol_images.json";

const HeaderMosaic = () => (
  <>
    <div id="divLabelGallerie">
      <label>NOS RÉALISATIONS</label>
    </div>
    <h1>
      Nous pouvons intervenir pour tout travaux de rénovations, que ce soit à
      l'intérieur ou l'extérieur de votre bien nous saurons vous donner le
      meilleur résultat !
    </h1>
    <Mosaic categoryName={"Le béton ciré"} data={dataBeton}/>
    <Mosaic categoryName={"Carrelage de salle de bain"} data={dataCarrelage}/>
    <Mosaic categoryName={"Devanture"} data={dataDevanture}/>
    <Mosaic categoryName={"Peinture sur toutes surface"} data={dataPeinture}/>
    <Mosaic categoryName={"Revetement de sol"} data={dataRevetement}/>
  </>
);

export default HeaderMosaic;
