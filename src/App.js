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
      <Navbar> </Navbar>
      <Welcome></Welcome>
      <Mosaic></Mosaic>
      <label id='lblInfos'>Informations & Localisation</label>
      <div id='InfosDevisID'>
        <Informations></Informations>
        <Devis></Devis>
      </div>
      <Maps></Maps>
      </>
  );
}

export default App;
