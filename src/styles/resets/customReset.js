import { css } from "styled-components";

export const customReset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    &,
    &:hover,
    &:focus,
    &:active,
    &:visited {
      text-decoration: none;
      background-color: transparent;
    }

    button {
      cursor: pointer;
    }
  }
`;
