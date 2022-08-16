import React from "react"

import Welcome from "./components/Bandeau/Welcome"
import Navbar from "./components/Header/Navbar"
import Mosaic from './components/Mosaique/Mosaic';
import Informations from './components/Informations/Informations';
import Devis from './components/Informations/Devis';
import Maps from './components/Informations/Maps';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Mosaic />
      <label id='lblInfos'>Informations & Localisation</label>
      <div id='infosDevisID'>
        <Informations />
        <Devis/>
      </div>
      <Maps />
    </>
  );
}
