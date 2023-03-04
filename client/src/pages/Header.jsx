import React, { useEffect } from 'react'
import { HeaderStyledComponent, Logo, 
  Events, HeaderNavLinks, WindowViewNav, ThemeSettings } from "../components/styled/Header.styled"
// import { Button } from "../components/maincomps/Button"
import { BiMoon, BiSun } from "react-icons/bi";
// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = ({ toggleMode, mode }) => {

  // AOS animation
  useEffect(() => {
    AOS.init();
  }, [])

  return (
   <HeaderStyledComponent>
    <Logo><img src={process.env.PUBLIC_URL+'/images/logo/mylogo.png'} alt='Logo'/></Logo>
    <Events>
     <p>Birthday Loading...</p>
    </Events>
    {/* Smaill screen navigation */}
    <HeaderNavLinks>
    </HeaderNavLinks>
    {/* Large screen navigation */}
    <WindowViewNav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Services</li>
        <li>Contacts</li>
        <li>Blog</li>
      </ul>
    </WindowViewNav>
    <ThemeSettings>
     {mode === "dark" ? <BiSun size={30} onClick={toggleMode} color={mode === "dark" ? "white" : "black"}/>
     : <BiMoon size={30} onClick={toggleMode} color={mode === "dark" ? "white" : "black"}/>}
      {/* <BiCog size={30} color={darkmode ? "white" : "black"}/> */}
    </ThemeSettings>
   </HeaderStyledComponent>
  )
}

export default Header
