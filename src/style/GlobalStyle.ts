import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
  --black-1: #0B0B0B;

  --dark-1: #1C1C1E;
  --dark-2: #2C2C2E;
  --dark-3: #3A3A3C;

  --gray-1: #9A9A9A;
  --gray-2: #CACACA;

  --background: #F1F1F1;

  --font-roboto: 'Roboto Condensed', sans-serif; 
  --font-inter: 'Inter', sans-serif;
  --font-barlow: 'Barlow', sans-serif;

  --text-weight: 400;
  --text-size: 16px;
  --text-line-height: 19px;
  --text-color: #000000;

  --text-money-weight: 700;
  --text-money-size: 24px;
  --text-money-line-height: 29px;

  --button-color: #FF9601;
  --button-color-hover: #FFC470;

}

body {
  background-color: black;
}
`
