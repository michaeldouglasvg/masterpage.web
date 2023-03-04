import styled from 'styled-components';

export const AboutMainStyled = styled.div`
  width: 100%;
  margin-top: 2rem;

  @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
    margin-top: 1.2rem;
  }
  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    margin-top: 1.5rem;
  }

  & > .Titleheader {
    width: 60%;
    @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
      width: 100%;
    }
    @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
      width: 100%;
    }
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
   height: calc(100vh - 80px);

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

export const DisplayLeft = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 flex-direction: column;
 margin: .1rem auto;
  @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
   padding: .4rem .8rem;
   width: 90%;
  }
  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    padding: .4rem 1rem;
    width: 80%;
    height: 78vh;
  }
`

export const ProgrammingJourney = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 1rem;
  @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
   padding: .4rem .8rem;
   width: 90%;
   margin-top: 0;
  }
  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    padding: .4rem 1rem;
    width: 80%;
    margin-top: 0;
  }

  & > div .Title {
    font-size: 1rem;
    color: orangered;
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

  & > .Display {
    width: 100%;
    max-height: 50vh;
    box-shadow: ${({theme}) => theme.colors.boxshadow};
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;
    padding: .4rem .1rem;
    &::-webkit-scrollbar{
     display: none;
    }

    @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
      padding: .4rem .6rem;
    }
    @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
      padding: .4rem 1rem;
    }
  }
`