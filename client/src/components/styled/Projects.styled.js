import styled from 'styled-components';

export const ProjectsMainStyles = styled.div`
  width: 100%;
  margin-top: 2rem;
  @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
    margin-top: .8rem;
  }
  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    margin-top: .4rem;
  }

  & > .Titleheader {
   width: 100%;

   & > h1 {
    font-size: 1.7rem;
    color: skyblue;
    padding-left: .8rem;
    
    @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
      font-size: 2.6rem;
    }
    @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
      font-size: 3rem;
    }
   }
  }

  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
   height: 100vh;

   & > .Titleheader {
    width: 100%;

    & > h1 {
     font-size: 3rem;
     color: skyblue;
     padding-left: 7rem;
    }
   }
  }
`

// Left Display
export const UnderDevelopmentProjects = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 flex-direction: column;

 & > .Titleworking{
  & h1{
    font-size: 1rem;
    color: orangered;
    text-align: center;
    margin-bottom: 1.2rem;
    color: ${({theme}) => theme.colors.color};
    @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
      font-size: 1.5rem;
    }
    @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
  }
}
`

export const LeftConatiner = styled.div`
 width: 100%;
 box-shadow: ${({theme}) => theme.colors.boxshadow};
 border-radius: 3px;
 padding: .4rem .4rem;
 margin: .1rem auto;
 @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
   padding: .4rem .8rem;
  }
  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    padding: .4rem 1rem;
    width: 80%;
  }
`

export const TopGrid = styled.div`
 width: 100%;
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
 grid-gap: .6rem;

 & > .Section{
  width: 130px;
  padding: .4rem .4rem;
  border-radius: 3px;
  border-right: 1px solid rgba(221, 221, 221);

  & > .First-Prog{
   font-weight: 600;
   color: orange;
   line-height: 1.3rem;
   font-size: .9rem;
    @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
      font-size: 1rem;
    }
    @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
      font-size: 1.2rem;
    }
  }
  & > .Second-Prog{
   font-size: 1rem;
   font-weight: 600;
   color: ${({theme}) => theme.colors.color};
   font-size: .9rem;
    @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
      font-size: 1rem;
    }
    @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
      font-size: 1.2rem;
    }
  }

  & > .First-Name{
   font-size: 1rem;
   font-weight: 600;
   color: skyblue;
   line-height: 1.3rem;
   font-size: .9rem;
    @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
      font-size: 1rem;
    }
    @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
      font-size: 1.2rem;
    }
  }
  & > .Second-Name{
   font-size: 1rem;
   font-weight: 600;
   color: ${({theme}) => theme.colors.color};
   line-height: 1.3rem;
   font-size: .9rem;
    @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
      font-size: 1rem;
    }
    @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
      font-size: 1.2rem;
    }
  }
 }
`

export const ImageSection = styled.div`
 width: 100%;
 height: 45vh;
 background: rgb(221, 221, 221);
 margin: .6rem auto;
 overflow: hidden;
`

export const TechnologiesUsed = styled.div`
 width: 100%;
 padding: .6rem .1rem;
 margin-top: .4rem;

 & > .Buttons{
  width: 100%;
  color: white;
  border-radius: 3px;
  padding: .6rem .4rem;
  cursor: pointer;

  &:hover{
   background: grey;
  }
 }

 & > .MainTechnologies{
  width: 100%;
  margin-top: .2rem;
  padding: .2rem .4rem;

  & > .Frontend{
   width: 100%;
   border-bottom:  ${({theme}) => theme.colors.border};
   padding-bottom: .4rem;
   margin-top: 1rem;
   & > h1{
    font-size: 1rem;
    font-weight: 600;
    color: orangered;
    line-height: 1.3rem;
   }
   & > p{
    font-size: .8rem;
    font-weight: 600;
    color: grey;
    line-height: 1.3rem;
   }
  }

  & > .Backend{
   width: 100%;
   margin-top: .8rem;
  
   & > h1{
    font-size: 1rem;
    font-weight: 600;
    color: orangered;
    line-height: 1.3rem;
   }
   & > p{
    font-size: .8rem;
    font-weight: 600;
    color: grey;
    line-height: 1.3rem;
   }
  }
 }
`

// right section
export const FinishedProjects = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 flex-direction: column;
 padding: 1rem .2rem;
 & .Title{
  & h1{
    font-size: 1rem;
    color: orangered;
    margin-bottom: 1.2rem;
    text-align: center;
    color: ${({theme}) => theme.colors.color};
    @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
      font-size: 1.5rem;
    }
    @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
  }
 }
`

export const RightContainer = styled.div`
  width: 100%;
  box-shadow: ${({theme}) => theme.colors.boxshadow};
  padding: .4rem .4rem;
  border-radius: 3px;
  padding: .4rem .4rem;
  margin: .1rem auto;
  @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
   padding: .4rem .4rem;
  }
  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    padding: .4rem 1rem;
    width: 80%;
  }

  & > .RightLinks{
   width: 100%;
   padding: .6rem 1rem;
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;

   & > p{
    font-size: 1rem;
    color: grey;
    font-weight: 600;
    margin-top: 1rem;
    color: ${({theme}) => theme.colors.color};
    @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
      margin-top: 0rem;
    }
   }
  }
`

export const ViewProject = styled.div`
 width: 100%;
 padding: .8rem .2rem;

 & > p{
  font-size: .8rem;
  text-align: center;
  margin-bottom: 1rem;
  color: ${({theme}) => theme.colors.color};
  line-height: 1.5rem;
  @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
    text-align: left;
    font-size: .9rem;
  }
  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    text-align: left;
    font-size: 1rem;
  }
 }
`
