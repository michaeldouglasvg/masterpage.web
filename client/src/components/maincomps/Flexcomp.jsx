import styled from 'styled-components';

export const FlexGlobal = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 width: 99%;
 padding: .8rem .2rem;
 margin: .6rem auto;
 border-radius: 3px;
 flex-wrap: wrap;
 overflow-x: hidden;
 position: relative;

 & > div{
  min-width: 200px;
 }

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  height: calc(100vh - 100px);
  width: 86%;
  justify-content: space-around;

  & > div{
   min-width: 200px;
   width: 45%;
  }
 }
`

