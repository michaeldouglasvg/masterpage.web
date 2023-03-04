import { Button } from '../components/maincomps/Button';
import React, {useState, useEffect } from 'react';
import { GridGlobal } from "../components/maincomps/Gridcomp"
import { ProjectsMainStyles, 
 UnderDevelopmentProjects, 
 FinishedProjects,
 LeftConatiner,
 TopGrid, ImageSection, TechnologiesUsed, 
 RightContainer, ViewProject } from "../components/styled/Projects.styled"
// import Skeleton from '@mui/material/Skeleton';
// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
 const[technologies, setTechnologies] = useState(false)
 const[projectclr, setProjectclr] = useState(false)

 // Handle the show technology function
 const toogleTechnologies = () => {
  setTechnologies(!technologies)
 }

 // Handling proojects clicked
 const openProject = () => {
  setProjectclr(!projectclr)
 }
 
 // AOS animation
 useEffect(() => {
    AOS.init();
  }, [])
  return (
    <ProjectsMainStyles>
      <div className='Titleheader' data-aos="zoom-in"><h1>Projects (5)</h1></div>
      <GridGlobal>

       {/* left section */}
       <UnderDevelopmentProjects>
        <div className='Titleworking'><h1>Working on(1)</h1></div>
        <LeftConatiner data-aos="fade-up">
         <TopGrid data-aos="fade-up">
          <div className='Section'>
           <p className='First-Prog'>Start:</p>
           <p className='Second-Prog'>21/02/2022</p>
          </div>
          <div className='Section'>
           <p className='First-Prog'>Finish:</p>
           <p className='Second-Prog'>01/03/2023</p>
          </div>
          <div className='Section'>
           <p className='First-Name'>Category:</p>
           <p className='Second-Name'>Website</p>
          </div>
          <div className='Section'>
           <p className='First-Name'>Title:</p>
           <p className='Second-Name'>AI Faces</p>
          </div>
         </TopGrid>
         <ImageSection data-aos="zoom-in">
          <img src={process.env.PUBLIC_URL+'/images/slides/mainprofile.jpg'} alt="description" width='100%' height='100%'/>
         </ImageSection>
         <TechnologiesUsed data-aos="fade-up">
          {!technologies ? 
          <p className='Buttons' onClick={toogleTechnologies}
          style={{background: technologies ? "green":"black", textAlign: technologies && "center"}}>View Technologies Used</p>
          :
          <p className='Buttons' onClick={toogleTechnologies}
          style={{background: technologies ? "green":"black", textAlign: technologies && "center"}}>Technology deployed in this project</p>
         }
         {technologies && <div className='MainTechnologies' data-aos="fade-in">
           <div className='Frontend'>
            <h1>Frontend Technologies</h1>
            <p>React, HTML, CSS, SASS, JavaScript</p>
           </div>
           <div className='Backend'>
            <h1>Backend Technologies</h1>
            <p>MongoDB, Node, FLask</p>
           </div>
          </div>}
         </TechnologiesUsed>
        </LeftConatiner>
       </UnderDevelopmentProjects>



       {/* right section */}
       <FinishedProjects data-aos="fade-up">
        <div className='Title' data-aos="fade-left"><h1>Working Projects(5)</h1></div>
        <RightContainer style={{transform: projectclr && "scale(.96)"}} data-aos="fade-up">
         <div className='RightLinks'>
          <p data-aos="zoom-in">Technology: Machine Learning</p>
          <p data-aos="zoom-in">Project: Face Recognition Based Attendance</p>
         </div>
         <ImageSection data-aos="zoom-in">
          <img src={process.env.PUBLIC_URL+'/images/slides/mainprofile.jpg'} alt="description" width='100%' height='100%'/>
          {/* Loop through several images */}
         </ImageSection>
         <ViewProject>
          <p data-aos="fade-up">First you have to wrap your app with the Provider giving it the alert template and optionally some options</p>
          <Button bg='skyblue' clr='black' onClick={openProject} data-aos="zoom-in">View Project</Button>
         </ViewProject>
        </RightContainer>
       {/* <Skeleton variant="rectangular" width={210} height={118} /> */}
       </FinishedProjects>



      </GridGlobal>
    </ProjectsMainStyles>
  );
}

export default Projects;
