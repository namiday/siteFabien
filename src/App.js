import './App.css';
import React from "react"
import Welcome from "./components/Bandeau/Welcome"
import Navbar from "./components/Header/Navbar"
import Mosaic from './components/Mosaique/Mosaic';
import Informations from './components/Informations/Informations';
import Devis from './components/Informations/Devis';
import Maps from './components/Informations/Maps';


function App() {
    return (
      <>
        <Navbar/>
        <Welcome/>
        <Mosaic/>
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
