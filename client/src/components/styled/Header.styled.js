import styled from 'styled-components';

// Main header styles
export const HeaderStyledComponent = styled.header`
 width: 100%;
 padding: .2rem .5rem;
 display: flex;
 align-items: center;
 justify-content: space-between;
 position: fixed;
 top: 0;
 left: 0;
 z-index: 999;
 background: var(--background-color);
 box-shadow: ${({theme}) => theme.colors.boxshadow};
 cursor: pointer;
 &:hover{
   box-shadow: ${({theme}) => theme.colors.boxshadow};
 }

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  padding: 1rem 7rem;
 }
`
// Heade >> Logo style
export const Logo = styled.div`
 width: 80px;
 height: 50px;
 display: grid;
 place-items: center;
 cursor: pointer;
 box-shadow: ${({theme}) => theme.colors.boxshadow};

 & > img{
  width: 100%;
  height: 100%;
 }
`
// Header >> Events style
export const Events = styled.div`
 width: 150px;
 height: 50px;
 display: grid;
 place-items: center;
 margin-left: .4rem;
 padding: 1rem .1rem;
 box-shadow: ${({theme}) => theme.colors.boxshadow};



 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  margin-left: 1rem;
 }
`
// Header >> Navigation links
export const HeaderNavLinks = styled.div`
 background: white;
 position: absolute;
 padding: .8rem 1rem;
 bottom: 0;
 width: 96%;
 height: 200px;
 margin: .6rem auto;
 border-radius: 3px;
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
 grid-gap: 1rem;
 display: none;

 & > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 50px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, .1);
  border-radius: 3px;
  p{
   padding: 1px;
  }
 }

 @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
  background: white;
  position: absolute;
  padding: .8rem 1rem;
  bottom: 0;
  right: 1rem;
  width: 80%;
  height: 200px;
  margin: .6rem auto;
  border-radius: 3px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  grid-gap: 1rem;
  display: none;


  & > div {
  width: 90px;
  height: 70px;
  p{
   padding: 1px;
  }
 }
 }

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  display: none;
 }
`
// Header >> Large screen navigation
export const WindowViewNav = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;

  & > ul {
   list-style: none;
   li{
    display: inline;
    padding: .4rem auto;
    font-size: 1.5rem;
    cursor: pointer;
    margin-left: 1.2rem;
    width: auto;
    position: relative;
    text-align: center;
    &:hover{
     color: rgb(9, 179, 185);
     &::before{
      content: " ";
      height: 3px;
      position: absolute;
      bottom: -.4rem;
      background: aqua;
      transition: all 500ms;
      animation: navfloor .5s ease forwards;
      @keyframes navfloor {
       from{
          width: 0%;
       }
       to{
          width: 100%;
       }
      }
     }
    }
   }
  }

  @media (max-width: ${({theme}) => theme.responsive.mobilemd}){
  display: none;
 }
`

// Header >> Theme section and Settings
export const ThemeSettings = styled.div`
 width: 60px;
 height: 50px;
 padding: .4rem .8rem;
 display: flex;
 align-items: center;
 justify-content: space-between;
 box-shadow: ${({theme}) => theme.colors.boxshadow};
 margin-left: .4rem;
`