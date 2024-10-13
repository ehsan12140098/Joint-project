import { createGlobalStyle } from "styled-components";
import { ericMyerReset } from "./resets/ericMyerreset";
import { customReset } from "./resets/customReset";

export const GlobalStyles = createGlobalStyle`
${ericMyerReset}
${customReset}

@font-face {
  font-family: "IRANsans"; /* Change the font-family to "iran-sans" */
  src: url('Assets/fonts/IRANsans.ttf') format('truetype');
}

html , body{
    font-family: "IRANsans"; /* Use "iran-sans" as the font-family */
    font-size: 1rem;
    font-weight: 400;
}
`;
