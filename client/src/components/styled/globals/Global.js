import { createGlobalStyle } from 'styled-components';

const Globalstyles = createGlobalStyle`
 :root {
  --background-color: ${({theme}) => theme.colors.body};
  --text-color: ${({theme}) => theme.colors.color};
 }

 * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-family: 'Signika', sans-serif;
  user-select: none;
  transition: all 1000ms;
  scroll-behavior: smooth;
  & > p div h1 h2 h3 {
   transition: all 1000ms;
  }
 }

 body{
  background: var(--background-color);
  color: var(--text-color);
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden;
 }
`

export default Globalstyles