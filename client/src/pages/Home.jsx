import React, { useEffect, useState } from 'react';
import { Homestyled, ImageContainer, Homeleftdivstyled, CertificatesCenter,
   CertificateDisplay, CertViewContainer } from "../components/styled/Home.styled"
import { FlexGlobal } from "../components/maincomps/Flexcomp"
import { Button } from "../components/maincomps/Button"
import { BiCog, BiDownload, BiLeftArrowAlt, BiExpand, BiCollapse } from "react-icons/bi";
import { FaChevronCircleLeft, FaChevronCircleRight} from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HomeCertificates } from "../constants/Home.data"

// Preevent right clicks events
import DisableRightClick from '../components/maincomps/DisableRightClickAndScreenshot'

const Home = ({ darkmode }) => {
  const[certificates, setCertificates] = useState(false)
  const[singlecertpage, setSinglecertpage] = useState(false)
  const[certcode, setCertcode] = useState(false)
  const[phoneauthentication, setPhoneauthentication] = useState('')


  // Open certificate
  const showCertificates = () => {
    setCertificates(true)
  }

  // Certificate download function
  const handleCertdownload = () => {
    setCertcode(!certcode)
  }

  // Open certificate view page
  const openCertviewpage = () => {
    setSinglecertpage(!singlecertpage)
  }

  // Check if phone number not empty
  const checkphonenumber = (event) => {
    setPhoneauthentication(event.target.value)
  }

  // Certificate navigation Prev Button
  const certPreviewButton = () => {
    alert("Preview certificates")
  }

  // Cert Next Button
  const certNextButton = () => {
    alert("Next certificate")
  }


  // Main function to render elements
  function showCertificatview() {
    return <CertificateDisplay>

      <CertViewContainer>
        <div className='TopSection'>
          <h1 style={{color: darkmode !== "light" ? "black" : "white"}}>Certficate Reviews</h1>
          <div  className='Colapse'>
           <BiCollapse color={darkmode !== "light" ? "black" : "white"} size={30} onClick={openCertviewpage}/>
          </div>
        </div>
        {/* Display page */}
        <div className='Viewsinglecertarea'>
          <div className='Actioncertbutton left'>
            <FaChevronCircleLeft  
            color={darkmode !== "light" ? "black" : "white"} size={30} onClick={certPreviewButton}/>
          </div>
          
          <div className='CertImage'>
          <img src={process.env.PUBLIC_URL+'/images/logo/mylogo.png'} alt='Logo'/>
          </div>

          <div className='Actioncertbutton right'>
            <FaChevronCircleRight  
            color={darkmode !== "light" ? "black" : "white"} size={30} onClick={certNextButton}/>
          </div>
        </div>
        <div className='Certfoooter'>
         <BiDownload size={30} color={darkmode !== "light" ? "black" : "white"} onClick={handleCertdownload}/>
         {!certcode ? <p style={{color: darkmode !== "light" ? "black" : "white", paddingLeft: "1rem"}}>Download</p> 
         : 
         (certcode ? <div className='Authenticator'>
          <span style={{color: darkmode !== "light" ? "black" : "white"}}>Phone: </span>
          <input type="text" placeholder='Eg:- 07XXXXXX82' value={phoneauthentication}
           onChange={checkphonenumber}/>
         </div>
         :
         (phoneauthentication.length >= 10 && <div className='Authenticator'>
         <span style={{color: darkmode !== "light" ? "black" : "white"}}>Code: </span>
         <input type="text" placeholder='Enter code...' />
        </div>)
        )}
        </div>
      </CertViewContainer>
     
    </CertificateDisplay>
  }


  // AOS animation
  useEffect(() => {
    AOS.init();
  }, [])

  // Return main component for export
  return (
    <DisableRightClick>
      <Homestyled>
        {singlecertpage && showCertificatview()}
        <FlexGlobal>
          <Homeleftdivstyled>
            <p className='Grettings' data-aos="fade-down">Hi, <span>I am</span></p>
            <h1 className='Name' data-aos="fade-up">Michael Douglas</h1>
            <p className='Typed' data-aos="zoom-in">Typed js...</p>
            <p className='Profile' ddata-aos="zoom-in">Hi, am a student at South Easter Kenya University. At 22, Learning Computer Science (CS) to advanced level. Hi, am a student at South Easter Kenya University. At 22, Learning Computer Science (CS) to advanced level.</p>

            <div className='ButtonsCvH' data-aos="fade-up">
              <Button bg='skyblue' clr='white'>Download CV</Button>
              <Button bg='orange' clr='white'>Hire Me</Button>
              {!certificates && <Button bg='green' clr='white' onClick={showCertificates}>Certificates</Button>}
            </div>
          </Homeleftdivstyled>
          {/* Display if certificates are set to flase */}

        {!certificates && <ImageContainer  data-aos="zoom-out">
          <img src={process.env.PUBLIC_URL+'/images/slides/mainprofile.jpg'} alt="description"/>
          </ImageContainer>}

          {/* Show certificates if certificates are set to true */}
          {certificates && <div>
            <CertificatesCenter data-aos="zoom-in" data-aos-offset="0">
            <div className='TopCertisfaction'>
              <Button onClick={() => {setCertificates(false)}} bg='green' clr='white'><BiLeftArrowAlt size={20}/> Back</Button>
              <p>My Certificates Page</p>
              <BiCog size={30} color={darkmode === "dark" ? "white" : "black"}/>
            </div>
            {/* Display image */}
            <div className='Imagecontainer'>
              {HomeCertificates.map((cert) => {
                return  <div className='SingleCertImage'>
                  <p style={{color: darkmode !== "light" ? "black" : "white", fontSize: "1rem"}}>From: {cert.from}</p>
                  <img src={cert.image} height="100%" width="100%" alt={cert.id}/>
                  <div className='CertDownload'>
                    <p style={{color: darkmode !== "light" ? "black" : "white"}}>Date: 12/02/2023</p>
                    <div className='Expand'><BiExpand size={25} color={darkmode !== "light" ? "black" : "white"} onClick={openCertviewpage}/></div>
                  </div>
                </div>
              })}
            </div>
            </CertificatesCenter>
          
          </div>}
        </FlexGlobal>
      </Homestyled>
    </DisableRightClick>
  );
}

export default Home;
