import React, { useEffect } from 'react';
import { AboutMainStyled, DisplayLeft, ProgrammingJourney } from "../components/styled/About.styled"
import { CardGlobal } from "../components/maincomps/Cardcomp"
// import Skeleton from '@mui/material/Skeleton';
import { GridGlobal } from "../components/maincomps/Gridcomp"
import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// Project data
// import { Projectsdisplaydata } from "../constants/About.data"


const Projects = () => {
  // const[imagetimeout, setTimeout] = useState(0)
  
  // AOS animation
  useEffect(() => {
    AOS.init();
  }, [])

  // // Loader functionality
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimeout(imagetimeout + 1)
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, [imagetimeout]);

  return (
    <AboutMainStyled>
      <div className='Titleheader' data-aos="zoom-in"><h1>About (Technologies)</h1></div>
      <GridGlobal>

       <DisplayLeft data-aos="fade-up">

      
        <CardGlobal data-aos="fade-up">
          <div className='CardTitle'>
            <p>UI/UX Designer</p>
          </div>
          <div className='CardImage'> 
            <img src={process.env.PUBLIC_URL+'/images/logo/mylogo.png'} alt='Profile'/>
          </div>
          <div className='CardProjects'>
            <p>Projects (5)</p>
          </div>
        </CardGlobal>

        <CardGlobal data-aos="fade-up">
         <div className='CardLinks'>
          <div><FaFacebook size={30} color='blue'/></div>
          <div><FaTwitter size={30} color='skyblue'/></div>
          <div><FaWhatsapp size={30} color='green'/></div>
          <div><FaInstagram size={30} color='orangered'/></div>
          <div><FaGithub size={30} color='black'/></div>
          <div><FaLinkedin size={30} color='#00c0de'/></div>
         </div>
          {/* <Skeleton variant="circular" width={40} height={40} /> */}
        </CardGlobal>
       </DisplayLeft>


       <ProgrammingJourney data-aos="fade-up">
        <div><h1 className='Title' data-aos="zoom-in">Programming Journey</h1></div>
        <div className='Display'>
          <CardGlobal data-aos="fade-up">
            <div className='TopBar' data-aos="zoom-in">
              <div>IG</div>
              <p>Fullstack</p>
            </div>
            <div className='LanguageDescription'>
              <p>Alternatively, you may use style objects. This allows for easy porting of CSS from inline styles, while still supporting the more advanced styled-components capabilities like component selectors and media queries.</p>
            </div>
          </CardGlobal>
          <CardGlobal data-aos="fade-up">
            <div className='TopBar' data-aos="zoom-in">
              <div>IG</div>
              <p>Fullstack</p>
            </div>
            <div className='LanguageDescription'>
              <p>Alternatively, you may use style objects. This allows for easy porting of CSS from inline styles, while still supporting the more advanced styled-components capabilities like component selectors and media queries.</p>
            </div>
          </CardGlobal>
          <CardGlobal data-aos="fade-up">
            <div className='TopBar' data-aos="zoom-in">
              <div>IG</div>
              <p>Fullstack</p>
            </div>
            <div className='LanguageDescription'>
              <p>Alternatively, you may use style objects. This allows for easy porting of CSS from inline styles, while still supporting the more advanced styled-components capabilities like component selectors and media queries.</p>
            </div>
          </CardGlobal>
        </div>
        
        {/* Languages display */}
        <CardGlobal data-aos="fade-up">
        <div className='CardLanguages' style={{ width: '100%' }}>

          <div data-aos="zoom-in">
            <p>Image</p>
            <p>20%</p>
          </div>

         </div>
        </CardGlobal>
       </ProgrammingJourney>

      </GridGlobal>
    </AboutMainStyled>
  );
}

export default Projects;