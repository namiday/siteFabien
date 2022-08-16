import React from "react"

import Test from './../../assets/images/Test.png';
import "./Navbar.css"

export default function Navbar() {
  return (
    <div id="header">
      <a href="#enteteWelcome"><img id="imgLogo" src={Test} alt="logo test"/></a>
      <ul className="navbar">
        <li><a href="#enteteWelcome">Home</a></li>
        <li><a href="#divLabelGallerie">Gallerie</a></li>
        <li><a href="#InfosDevisID">Contact</a></li>
      </ul>
    </div>
  );
}