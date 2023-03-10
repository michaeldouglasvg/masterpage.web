import React, { useEffect, useState } from 'react';
import { Homestyled, ImageContainer, Homeleftdivstyled, CertificatesCenter,
   CertificateDisplay, CertViewContainer } from "../components/styled/Home.styled"
import { FlexGlobal } from "../components/maincomps/Flexcomp"
import { Button } from "../components/maincomps/Button"
import { BiCog, BiDownload, BiLeftArrowAlt, BiExpand, BiCollapse } from "react-icons/bi";
import { FaChevronCircleLeft, FaChevronCircleRight} from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
// Preevent right clicks events
import DisableRightClick from '../components/maincomps/DisableRightClickAndScreenshot'
// Import certificate data
import { DataCertificates } from '../constants/Certificates.data'


const Home = ({ darkmode }) => {
  const[certificates, setCertificates] = useState(false)
  const[singlecertpage, setSinglecertpage] = useState(false)
  const[certcode, setCertcode] = useState(false)
  const[phoneauthentication, setPhoneauthentication] = useState('')
  const[certcount, setCertcount] = useState(0)


  // Open certificate
  const showCertificates = () => {
    setCertificates(true)
  }

  // Certificate download function
  const handleCertdownload = () => {
    alert("From: GtechAmourdevelopers.com\n\nWelcome again, Download need to access your phone number for sending download code, Please NOTE that you can NOT download any certificate without the download access code {DAC}.\n\nThank you for visiting My Certificate page.");
    setCertcode(!certcode)
  }

  // Open certificate view page
  const openCertviewpage = (id) => {
    setCertcount(id)
    setSinglecertpage(!singlecertpage)
  }

  // Check if phone number not empty
  const checkphonenumber = (event) => {
    setPhoneauthentication(event.target.value)

    if(phoneauthentication.length === 9){
      alert("From: GtechAmourdevelopers.com\n\nSory!!! functionality under maintainance. Your phone number is used to send download access code {DAC} only NOT for other purposes when using this site. I value your Privacy.\n\nThank you for attempting to download.");
    }
  }

  // Certificate navigation Prev Button
  const certPreviewButton = () => {
      certcount > 0 ? setCertcount(certcount - 1) : setCertcount(DataCertificates.length - 1)
  }

  // Cert Next Button
  const certNextButton = () => {
    certcount < DataCertificates.length - 1 ? setCertcount(certcount + 1) : setCertcount(0)
  }


  // Main function to render elements
  function showCertificatview() {
    return <CertificateDisplay>

      <CertViewContainer data-aos="zoom-in">
        <div className='TopSection'>
          <p style={{color: darkmode !== "light" ? "black" : "white", fontSize: "1rem", fontWeight: 500}}>
            Showing Result ({certcount === 0 ? "1" : certcount + 1}): <span style={{color: "skyblue"}}>{DataCertificates[certcount].certName}</span>
          </p>
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
             <img src={DataCertificates[certcount].certImage} alt='Logo'/>
          </div>

          <div className='Actioncertbutton right'>
            <FaChevronCircleRight  
            color={darkmode !== "light" ? "black" : "white"} size={30} onClick={certNextButton}/>
          </div>
        </div>
        <div className='Certfoooter'>
         <p style={{color: darkmode !== "light" ? "black" : "white", fontSize: "1rem", marginRight: "1rem", fontWeight: 600}}>
          {`${certcount === 0 ? "1" : certcount + 1} / ${DataCertificates.length}`}
          </p>
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
              <p>My Certificates ({DataCertificates.length})</p>
              <BiCog size={30} color={darkmode === "dark" ? "white" : "black"}/>
            </div>
            {/* Display image */}
            <div className='Imagecontainer'>
              {DataCertificates.map((cert, key) => {
                return  <div className='SingleCertImage' key={key}>
                  <p style={{color: darkmode !== "light" ? "black" : "white", fontSize: "1rem"}}>From: {cert.certFrom}</p>
                  <img src={cert.certImage} height="100%" width="100%" alt={cert.id}  onClick={() => openCertviewpage(key)}/>
                  <div className='CertDownload'>
                    <p style={{color: darkmode !== "light" ? "black" : "white"}}>{cert.certDate}</p>
                    <div className='Expand'><BiExpand size={25} color={darkmode !== "light" ? "black" : "white"} 
                    onClick={() => openCertviewpage(key)}/></div>
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
