import styled from 'styled-components';

export const ContactMainSTyles = styled.div`
  width: 100%;
  margin-top: .6rem;
  @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
    margin-top: .8rem;
  }
  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    margin-top: .9rem;
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
    font-size: 2rem;
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

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 99%;
  padding: .1rem .2rem;
  margin: .6rem auto;
  border-radius: 3px;
  background: ${({theme}) => theme.colors.body};

  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    height: calc(100vh - 100px);
    width: 86%;
 }
`



// ****************************************************************************************
export const GridContactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-gap: 10px;
  width: 99%;
  padding: 1rem .2rem;
  margin: 1rem auto;
  border-radius: 3px;

  & > .Cardintouch{
    padding: .8rem .1rem;
    border-radius: 0 5px;
    box-shadow: ${({theme}) => theme.colors.boxshadow};
    display: flex;
    align-items: center;
    border-left: 10px solid gold;
    
    
    &:hover{
      transform: scale(.99);
      border-left: 10px solid goldenrod;

      & .Intouchguide{
        & p{
          color: ${({theme}) => theme.colors.color};
          &:nth-child(2){
            cursor: pointer;
          }
        }
      }
    }

    & .Icon{
      width: 60px;
      height: 40px;
      padding: .1rem .4rem;
      border-right: ${({theme}) => theme.colors.border};
      display: grid;
      place-items: center;
    }

    & .Intouchguide{
      margin-left: 1rem;
      & p{
        padding: .2rem .1rem;
        color: ${({theme}) => theme.colors.color};
        font-size: 13px;
        @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
          font-size: .9rem;
        }
        @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
          font-size: 1.2rem;
        }
      }
    }
  }

  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    padding: 1rem 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
    grid-gap: 10px;
    overflow-y: scroll;
    &::-webkit-scrollbar{
       display: none;
    }
  }
`


export const FlexContactContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 99%;
  padding: .8rem .2rem;
  margin: .6rem auto;
  border-radius: 3px;

  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    width: 98%;
 }
`

export const MapContainerLeft = styled.div`
  width: 100%;
  box-shadow: 0 0 2px 1px rgb(221, 221, 221);
  position: relative;
  background: skyblue;
  border-radius: 3px;
  @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
    width: 400px;
  }
  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    width: 65%;
    height: 55vh;
  }

  & > .Maplabel{
    position: absolute;
    top: 0;
    left: 0;
    padding: .8rem 1rem;
    background: rgba(255, 255, 255, .6);
    & p{
      color: grey;
    }
  }

  & .Map{
    height: 30vh;
    background: skyblue;
    box-shadow: ${({theme}) => theme.colors.boxshadow};
  }

  & > .Mapfooter{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: .8rem 1rem;
    background: rgba(255, 255, 255, .6);
    & p{
      color: grey;
    }
  }
`


export const FormConainer = styled.div`
  width: 100%;
  padding: .8rem .1rem;
  margin-top: 1rem;
  @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
    width: 300px;
    margin-top: 0;
    padding: .8rem .2rem;
  }
  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    width: 34%;
    height: 55vh;
    margin-top: 0;
    padding: .8rem 1rem;
  }

  & > .TopForm{
    width: 100%;
    padding: .5rem .4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: ${({theme}) => theme.colors.boxshadow};

    & p{
      font-size: 1.1rem;
      color: ${({theme}) => theme.colors.color};
    }
  }

  & > .FormContainer{
    box-shadow: ${({theme}) => theme.colors.boxshadow};
    padding: 1rem .2rem;
    margin: 1rem auto;

    & form{
      width: 100%;
      padding: .4rem .1rem;

      & > .Formgroup{
        width: 100%;
        padding: .2rem .1rem;
        display: flex;
        justify-content: center;
        flex-direction: column;

        & span{
          color: ${({theme}) => theme.colors.color};
          padding-bottom: .4rem;
          font-size: 1rem;
          @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
            font-size: 1.2rem;
          }
          @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
            font-size: 1.4rem;
          }
        }

        & input{
          width: 100%;
          border: none;
          outline: none;
          border-radius: 3px;
          padding: .9rem .6rem;
        }

        & input[type='submit'] {
          background: black;
          color: whitesmoke;
          cursor: pointer;
          margin-top: 1rem;
        }

        & textarea{
          height: 120px;
          width: 100%;
          border: none;
          outline: none;
          border-radius: 3px;
          padding: .9rem .6rem;
        }
      }
    }
  }
`
// *************************************************************************************


export const ContactTopConatiner = styled.div`
  width: 100%;
  padding: 1rem .4rem;
  background: ${({theme}) => theme.colors.body};
  /* background: #f2ebeb; */
  @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
    margin: .6rem auto;
  }
  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    margin: .8rem auto;
  }

  & > .Contact-intouch{
    width: 100%;
    padding: .2rem .1rem;
    position: relative;
    & h1{
      font-size: 1rem;
      color: ${({theme}) => theme.colors.color};
      &::before{
        content: "";
        width: 70px;
        height: 5px;
        color: orange;
        background: orange;
        position: absolute;
        bottom: -.4rem;
      }
      @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
        font-size: 1.3rem;
      }
      @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
        font-size: 1.6rem;
      }
    }
  }
`


export const ContactBottomContainer = styled.div`
  width: 100%;
  padding: 1rem .4rem;
  background: ${({theme}) => theme.colors.body};
  /* background: #f2ebeb; */
  @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
    margin: .6rem auto;
  }
  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    margin: .8rem auto;
  }

  & > .Contact-intouch{
    width: 100%;
    padding: .2rem .1rem;
    position: relative;
    & h1{
      font-size: 1rem;
      color: ${({theme}) => theme.colors.color};
      &::before{
        content: "";
        width: 70px;
        height: 5px;
        color: orange;
        background: orange;
        position: absolute;
        bottom: -.4rem;
      }
      @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
        font-size: 1.3rem;
      }
      @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
        font-size: 1.6rem;
      }
    }
  }
`