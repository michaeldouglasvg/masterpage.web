import styled from 'styled-components';

export const GridGlobal = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
 grid-gap: 10px;
 width: 99%;
 padding: 1rem .2rem;
 margin: 1rem auto;
 /* box-shadow: 0 0 2px 1px rgba(0, 0, 0, .1); */
 border-radius: 3px;
 overflow-x: hidden;

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  padding: 1rem 1rem;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
  grid-gap: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar{
   display: none;
  }
 }
`