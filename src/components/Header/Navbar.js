import React from "react"
import Logo from './../../assets/images/logo_tce.jpg';
import "./Navbar.css"

const Navbar = () => {
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return(
    <div id='divHeader'>
      <a href="#anchorWelcome" onClick={topFunction()}><img id="imgLogo" src={Logo} alt='logo tce'/></a>
      <ul className='classNavbar'>
        <a href="#anchorWelcome"><li>PRÉSENTATION</li></a>
        <a href="#anchorGallery"><li>RÉALISATIONS</li></a>
        <a href="#anchorInfos"><li>CONTACT</li></a>
      </ul>
    </div>
  )
  }
export default Navbar;