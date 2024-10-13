import { css } from "styled-components";

const CommonStyle = css`
  text-align: center;
  letter-spacing: -0.02em;
  font-style: normal;
`;
export const H1 = css`
  ${CommonStyle}
  font-size: 1.5rem;
  line-height: 1.6rem;
`;

export const H1_BOLD = css`
  ${H1}
  font-weight: 700;
`;

export const LARGE_TEXT = css`
  ${CommonStyle}
  font-size: 1.17rem;
  line-height: normal;
`;

export const LARGE_TEXT_REGULAR = css`
  ${LARGE_TEXT}
  font-weight: 400;
`;

export const LARGE_TEXT_BOLD = css`
  ${LARGE_TEXT}
  font-weight: 700;
`;

export const MAIN_TEXT = css`
  ${CommonStyle}
  font-size: 1rem;
  line-height: 1.6rem;
`;

export const MAIN_TEXT_REGULAR = css`
  ${MAIN_TEXT}
  font-weight: 400;
`;

export const MAIN_TEXT_BOLD = css`
  ${MAIN_TEXT}
  font-weight: 700;
`;

export const MEDIUM_TEXT = css`
  ${CommonStyle}
  font-size: 0.9rem;
  line-height: 1.6rem;
`;

export const MEDIUM_TEXT_REGULAR = css`
  ${MEDIUM_TEXT}
  font-weight: 400;
`;
export const MEDIUM_TEXT_BOLD = css`
  ${MEDIUM_TEXT}
  font-weight: 700;
`;

export const SMALL_TEXT = css`
  ${CommonStyle}
  font-size: 0.8rem;
  line-height: 1rem;
`;

export const SMALL_TEXT_REGULAR = css`
  ${SMALL_TEXT}
  font-weight: 400;
`;
