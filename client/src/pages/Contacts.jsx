// import { Button } from '../components/maincomps/Button';
import React, { useEffect } from 'react';
import { ContactMainSTyles, FlexWrapper,  GridContactContainer, 
  FlexContactContainer, ContactTopConatiner, ContactBottomContainer,
  MapContainerLeft, FormConainer} from "../components/styled/Contact.styled"
  import { BiEnvelope, BiMapPin, BiLink, BiPhoneCall, BiQuestionMark} from "react-icons/bi";
// import Skeleton from '@mui/material/Skeleton';
// import { Button } from '../components/maincomps/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = ({ darkmode }) => {

  // AOS animation
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <ContactMainSTyles>
      <div className='Titleheader' data-aos="zoom-in"><h1>Contacts</h1></div>
      <FlexWrapper>

        <ContactTopConatiner>
          <div className='Contact-intouch'>
            <h1 data-aos="fade-right">Get in touch</h1>
          </div>
         <GridContactContainer>

          <div className='Cardintouch' data-aos="fade-up">
          <div className='Icon'><BiEnvelope size={40} color={darkmode === "light" ? "black" : "white"}/></div>
           <div className='Intouchguide'>
            <p>Email through</p>
            <p>gtechmb27infinity@gmail.com</p>
           </div>
          </div>


          <div className='Cardintouch' data-aos="fade-up">
          <div className='Icon'><BiPhoneCall size={40} color={darkmode === "light" ? "black" : "white"}/></div>
           <div className='Intouchguide'>
            <p>Call through</p>
            <p>+2547 121 34523</p>
           </div>
          </div>


          <div className='Cardintouch' data-aos="fade-up">
          <div className='Icon'><BiMapPin size={40} color={darkmode === "light" ? "black" : "white"}/></div>
           <div className='Intouchguide'>
            <p>Google map</p>
            <p>Eldoret, Kenya</p>
           </div>
          </div>


          <div className='Cardintouch' data-aos="fade-up">
          <div className='Icon'><BiLink size={40} color={darkmode === "light" ? "black" : "white"}/></div>
           <div className='Intouchguide'>
            <p>Website</p>
            <p>https://gtechtechnologies.com</p>
           </div>
          </div>
         </GridContactContainer>
        </ContactTopConatiner>

        <ContactBottomContainer>
          <div className='Contact-intouch'>
            <h1>Map and Contact</h1>
          </div>
          <FlexContactContainer>
            <MapContainerLeft data-aos="zoom-in">
             <div className='Maplabel' data-aos="fade-right"><p>Location</p></div>
             <img src={process.env.PUBLIC_URL+'/images/slides/mainprofile.jpg'} alt="description" width='100%' height='100%'/>
             {/* Map goes here */}
             <div className='Mapfooter' data-aos="zoom-in"><p>GtechLLC</p></div>
            </MapContainerLeft>
            
            <FormConainer>
              <div className='TopForm'>
                <p data-aos="zoom-in">Hire Me</p>
                <BiQuestionMark size={40} color='grey'/>
              </div>

              <div className='FormContainer' data-aos="fade-up">
                <form>
                  <div className='Formgroup'>
                    <span>Full name</span>
                    <input type="text" placeholder='Enter full name' />
                  </div>
                  <div className='Formgroup'>
                    <span>Email</span>
                    <input type="text" placeholder='Your email address' />
                  </div>
                  <div className='Formgroup'>
                    <span>Subject</span>
                    <input type="text" placeholder='Reason for contact' />
                  </div>
                  <div className='Formgroup'>
                    <span>Message</span>
                   <textarea placeholder='Write your message here...' />
                  </div>
                  <div className='Formgroup'>
                    <input type="submit" value='Send Message' />
                  </div>
                </form>
              </div>
            </FormConainer>
          </FlexContactContainer>
        </ContactBottomContainer>

      </FlexWrapper>
    </ContactMainSTyles>
  );
}

export default Contact;
