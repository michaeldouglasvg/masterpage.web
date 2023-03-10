import styled from 'styled-components';

// background: var(--background-color);
// color: var(--text-color);
export const Homestyled = styled.div`
 width: 100%;

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  margin-top: 3rem;
 }
`
// ************************************************************
export const ImageContainer = styled.div`
 width: 100%;
 height: 100%;
 margin-top: 2rem;
 overflow: hidden;
 display: flex;
 justify-content: center;
 align-items: center;
 position: relative;
 &::before{
  content: '';
  width: 100px;
  height: 100px;
  position: absolute;
  top: 1rem;
  right: 6rem;
  background: gold;
  border-radius: 50px 50px 50px 0;
  z-index: -10;
 }
 &::after{
  content: '';
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: 1rem;
  right: 6rem;
  background: skyblue;
  border-radius: 0 50px 50px 50px;
  z-index: -10;
 }

 & > img {
  width: 70%;
  height: 100%;
  border-radius: 50% 50% 50% 0;
  z-index: 10;
 }
 @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
    height: 65%;
    width: 50%;
  }
 
 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
   margin-top: 0;
   margin-left: 2rem;
   height: 60%;
   width: 50%;
 }
`
// ***********************************************************

export const Homeleftdivstyled = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 flex-direction: column;
 
 .Grettings{
  font-size: 2rem;
  color: ${({theme}) => theme.colors.color};
  font-weight: 600;

  & > span{
   font-size: 2rem;
   color: orangered;
   font-weight: 600;
   @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
      font-size: 2.5rem;
    }
    @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
      font-size: 3.2rem;
    }
  }
  @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
   font-size: 2.5rem;
  }
  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
   font-size: 3.2rem;
   margin-bottom: 1rem;
  }
 }

 .Name{
  font-size: 2rem;
  color: skyblue;
  padding-top: 1rem;
  font-weight: 600;

  @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
   font-size: 2.5rem;
  }
  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
   font-size: 3.2rem;
   margin-bottom: .6rem;
  }
 }

 .Typed{
  font-size: 1.2rem;
  color: orange;
  font-weight: 600;
  padding-top: 1rem;
  @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
   font-size: 2rem;
  }
  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
   font-size: 2.5rem;
  }
 }

 .Profile{
  font-size: .9rem;
  line-height: 1.5rem;
  margin-top: 1rem;
  color: ${({theme}) => theme.colors.color};
  @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
   font-size: 1.2rem;
  }
  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
   font-size: 1.6rem;
   line-height: 2rem;
  }
 }

 .ButtonsCvH{
  margin-top: 1rem;
  display: flex;
  justify-content: flex-start;
  @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
   margin-top: 1.5rem;
  }
  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
   margin-top: 2rem;
  }
 }
`


// ***************** Certificates ********************************
export const CertificatesCenter = styled.div`
  padding: 1rem .2rem;

  & > .TopCertisfaction {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: ${({theme}) => theme.colors.boxshadow};
    padding: .6rem .2rem;
    @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
      padding: .6rem .2rem;
    }
    @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
      padding: .6rem 1rem;
    }

    & p{
      color: ${({theme}) => theme.colors.color};
      font-size: .8rem;
      @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
        font-size: 1.3rem;
      }
      @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
        font-size: 1.6rem;
      }
    }
  }

  & > .Imagecontainer{
    width: 100%;
    padding: .6rem .6rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 1rem;
    place-items: center;
    margin-top: 1rem;
    height: auto;
    max-height: 40vh;
    overflow-y: scroll;

    & .SingleCertImage{
      width: 220px;
      max-width: 250px;
      height: 300px;
      overflow: hidden;
      position: relative;
      box-shadow: ${({theme}) => theme.colors.boxshadow};
      border-radius: 3px;

      & > img{
        cursor: pointer;
      }

      & > p{
        padding: .5rem .6rem;
        background: ${({theme}) => theme.colors.transparent};
        text-align: center;
        color: ${({theme}) => theme.colors.color};
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 99;
      }

      & .CertDownload{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .2rem .4rem;
        background: ${({theme}) => theme.colors.transparent};
        color: ${({theme}) => theme.colors.color};
        position: absolute;
        bottom: 0;
        right: 0;

        & > p{
          font-size: 1rem;
          font-weight: 600;
        }

        & .Expand{
          width: 40px;
          height: 40px;
          padding: .2rem .2rem;
          display: grid;
          place-items: center;
          cursor: pointer;
        }
      }
    }
  }

`

// Certificate page
export const CertificateDisplay = styled.div`
 height: 100vh;
 width: 100%;
 position: fixed;
 top: 0;
 left: 0;
 background: ${({theme}) => theme.colors.transparent};
 z-index: 10000;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: all 1000;
`

export const CertViewContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: .1rem auto;
  padding: 1rem .6rem;
  border-radius: 5px;
  background: ${({theme}) => theme.colors.transparent};
  @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
    width: 75%;
    margin: 1rem auto;
     height: 90vh;
     padding: 1rem 1rem;
  }
  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    width: 40%;
    margin: 4rem auto;
    height: 72vh;
    padding: 1rem 1.4rem;
  }

  & .TopSection{
    width: 100%;
    border-bottom: ${({theme}) => theme.colors.border};
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    & > .Colapse{
      padding: .1rem .8rem;
      border-radius: 3px;
      margin: .2rem .1rem;
      &:hover{
        background: orangered;
      }
    }
  }

  & .Viewsinglecertarea{
    padding: .2rem .1rem;
    height: 80vh;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
     height: 70vh;
     padding: .2rem .4rem;
    }
    @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
     height: 56vh;
     padding: .2rem 2rem;
    }

    & > .CertImage{
      margin: .1rem auto;
      width: 300px;
      height: 70vh;
      border-radius: 5px;
      background: skyblue;
      overflow: hidden;
      & img{
        width: 100%;
        height: 100%;
      }
      @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
       width: 500px;
       height: 100%;
      }
      @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
        width: 600px;
        height: 100%;
      }
    }
  }

  & .Actioncertbutton{
    z-index: 99;
    width: 50px;
    height: 50px;
    display: grid;
    place-items: center;
    cursor: pointer;
    position: relative;
    border-radius: 3px;
    &:hover{
      background: skyblue;
    }
  }

  & > .left{
    position: fixed;
    left: 0;
    z-index: 100;
  }

  & > .right{
    position: fixed;
    right: 0;
  }

  & .Certfoooter{
    width: 100%;
    border-top: ${({theme}) => theme.colors.border};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem .2rem;
    cursor: pointer;

    & .Authenticator{
      width: 150px;
      padding: .2rem .2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 1rem;

      & input{
        border: none;
        outline: none;
        padding: .4rem .2rem;
      }
    }
  }
`