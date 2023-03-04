import styled from "styled-components"

export const Button = styled.button`
 padding: .4rem .4rem;
 display: flex;
 align-items: center;
 border: none;
 outline: none;
 background: ${({bg}) => bg || "whitesmoke"};
 color: ${({clr}) => clr || "grey"};
 border-radius: 3px;
 cursor: pointer;
 box-shadow: ${({theme}) => theme.colors.boxshadow};
 opacity: .9;
 transition: all 200ms;
 text-align: center;
 margin-top: .6rem;
 
 &:hover{
  opacity: 1;
  transform: scale(.97);
 }

 @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
  padding: .5rem .8rem;
  margin-right: .4rem;
 }
 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  padding: 1.2rem 1.2rem;
  margin-right: .8rem;
 }
`