import logo from './logo.svg';
import Test from './assets/images/Test.png';
import './App.css';
import React from "react"
import useSticky from "./hooks/useSticky.js"
import Welcome from "./components/Bandeau/Welcome"
import Navbar from "./components/Header/Navbar"
import Mosaic from './components/Mosaique/Mosaic';
function App() {
    const { isSticky, element } = useSticky()
    return (
      <>
      <Navbar> </Navbar>
      <Welcome></Welcome>
      <Mosaic></Mosaic>
      </>
      // <div id='header'>
      //   <img id="imgLogo" src={Test} alt='logo test'/>
      //     <ul className='navbar'>
      //       <li>Home</li>
      //       <li>Gallerie</li>
      //       <li>Contact</li>
      //     </ul>
      // </div>
  );
}

export default App;
{/* <Navbar sticky={isSticky} />
        <Welcome element={element} /> */}