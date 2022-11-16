import './App.css';
import React from "react"
import Welcome from "./components/Bandeau/Welcome"
import Navbar from "./components/Header/Navbar"
import Mosaic from './components/Mosaique/Mosaic';
import HeaderMosaic from './components/Mosaique/HeaderMosaic';
import Informations from './components/Informations/Informations';
import Devis from './components/Informations/Devis';
import Maps from './components/Informations/Maps';
import data from "./assets/images.json";
import dataBeton from "./assets/beton_cire_images.json";
import dataCarrelage from "./assets/carrelage_sdb_images.json";
import dataDevanture from "./assets/devanture_images.json";
import dataPeinture from "./assets/peinture_hotel_images.json";
import dataRevetement from "./assets/revetement_sol_images.json";

function App() {
    return (
      <>
        <Navbar/>
        <Welcome/>
        <HeaderMosaic/>
        {/* <Mosaic data="../../assets/images.json" categoryName="Le béton ciré"/> */}
        <span className="anchorHidden" id="anchorInfos" />
        <label id='lblInfos'>INFORMATIONS</label>
        <div id='divInfosDevis'>
          <Informations></Informations>
          <Devis/>
        </div>
        <Maps/>
      </>
  );
}

export default App;
