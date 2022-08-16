import React from "react"
import Test from './../../assets/images/Test.png';
import "./Navbar.css"

const Navbar = ({sticky}) => (
  <div id='header'>
    <a href="#enteteWelcome"><img id="imgLogo" src={Test} alt='logo test'/></a>
    <ul className='navbar'>
      <a href="#enteteWelcome"><li>Home</li></a>
      <a href="#divLabelGallerie"><li>Gallerie</li></a>
      <a href="#InfosDevisID"><li>Contact</li></a>
    </ul>
  </div>
)
export default Navbar