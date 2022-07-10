import React from "react"
import Test from './../../assets/images/Test.png';
import "./Navbar.css"

const Navbar = ({sticky}) => (
  // <nav className="navbar">
  //   <div className="navbar--logo-holder">
  //     <img src={Logo} alt="logo" className="navbar--logo" />
  //     {sticky ? <img src={Logo} alt="logo" className="navbar--logo" /> : null}
  //     <h1> Stick'Me</h1>
  //   </div>
  //   <ul className="navbar--link">
  //     <li className="navbar--link-item">Home</li>
  //     <li className="navbar--link-item">About</li>
  //     <li className="navbar--link-item">Blog</li>
  //   </ul>
    // </nav>
  <div id='header'>
    <img id="imgLogo" src={Test} alt='logo test'/>
    <ul className='navbar'>
      <li>Home</li>
      <li>Gallerie</li>
      <li>Contact</li>
    </ul>
  </div>
)
export default Navbar