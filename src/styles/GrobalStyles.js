import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        word-break: keep-all;
    }
    button {
        cursor: pointer;
        background: transparent;
        border: transparent;
    }
`;

export default GlobalStyles;