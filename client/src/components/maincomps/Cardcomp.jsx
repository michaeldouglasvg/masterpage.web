import styled from 'styled-components';

export const CardGlobal = styled.div`
 margin: .2rem auto;
 width: 100%;
 padding: .6rem .2rem;
 /* box-shadow: ${({theme}) => theme.colors.boxshadow}; */
 border-radius: 3px;
 margin-top: 2rem;

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  min-width: 300px;
  width: 98%;
  margin-top: 1rem;
  margin: .1rem auto;
 }

 /* Inner styles */
 & > .CardTitle {
  width: 100%;

  & > p{
   font-size: 1.2rem;
   padding: .2rem .1rem;
   color: ${({theme}) => theme.colors.color};
  }
 }

 & > .CardImage {
  width: 100%;
  height: 50vh;
  margin: .4rem auto;
  overflow: hidden;
  border-top: ${({theme}) => theme.colors.border};
  border-bottom: ${({theme}) => theme.colors.border};
  padding: .4rem .1rem;

  & > img {
   width: 100%;
   height: 100%;
  }
 }

 & > .CardProjects {
  width: 100%;
  padding: .4rem .1rem;

  & p{
   font-size: 1rem; 
   color: ${({theme}) => theme.colors.color};
  }
 }

 & > .CardLinks {
  padding: .2rem .1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > div {
   margin-right: 1rem;
   height: 40px;
   width: 40px;
   border-radius: 50%;
   display: grid;
   place-items: center;
  }
 }

 & > .CardLanguages {
  margin-right: 1rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem .1rem;
  height: 12vh;
  overflow-x: scroll;
  &::-webkit-scrollbar{
   display: none;
  }

  & > div {
   margin-right: 1rem;
   height: 70px;
   width: 100px;
   border-radius: 3px;
   display: grid;
   place-items: center;
   box-shadow: 0 0 2px 1px rgb(215, 212, 212);
  }
 }

 & > .TopBar {
  width: 100%;
  display: flex;

  & > div {
   display: grid;
   place-items: center;
   width: 60px;
   height: 50px;
   border-radius: 0 1px;
   box-shadow: 0 0 2px 1px rgb(215, 212, 212);
  }

  & > p {
   font-size: 1.5rem;
   flex: 1;
   margin-left: 1rem;
   align-items: flex-end;
   color: ${({theme}) => theme.colors.color};
  }
 }

 & > .LanguageDescription {
  margin-top: .8rem;
  padding: .3rem .2rem;
  & > p {
   line-height: 1.5rem;
   font-size: .7rem;
   color: ${({theme}) => theme.colors.color};
   @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
    line-height: 1.6rem;
    font-size: .9rem;
   }
   @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    line-height: 1.7rem;
    font-size: 1rem;
   }
  }
 }
`