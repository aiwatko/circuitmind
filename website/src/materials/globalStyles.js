import { createGlobalStyle } from 'styled-components';
import Bg from '../static/bg.jpg';

const GlobalStyles  = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: 'Nunito Sans', sans-serif;
    background-image: url(${Bg});
    background-size: cover;
    background-position: center; 
	}
`;

export default GlobalStyles;
