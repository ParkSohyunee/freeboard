import { css } from "@emotion/react";

export const GlobalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
    font-family: var(--font-family);
  }

  :root {
    /* color */
    --font-color-lightBeen: #8cc293;
    --font-color-Grass: #5da490;
    --font-color-DeepBlue: #336673;
    --font-color-lightPeach: #ffcc95;
    --font-color-white: #ffffff;
    --font-color-darkGrey: #4f4f4f;
    --color-light-beige: #ffebcc;
    --color-medium-beige: #c6b396;
    --color-dark-brown: #a86e58;
    --color-light-brown: #f3e2dc;

    /* font-size */
    --font-size-regular: 1.5rem;
    --font-size-semiregular: 1.2rem;
    --font-size-small: 0.8rem;

    /* font-weight */
    --font-weight-medium: 700;
    --font-weight-semibold: 600;
    --font-weight-regular: 400;

    /* border-radius */
    --border-radius-regular: 0.8rem;
    --border-radius-small: 0.5rem;

    /* --base-size: 10px; */
    --font-family: "Noto Sans KR", sans-serif;
  }
`;
