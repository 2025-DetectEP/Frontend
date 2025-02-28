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
        padding: 0;
        // 드래그 방지
        /* -webkit-user-select:all;
        -moz-user-select:all;
        -ms-user-select:all;
        -o-user-drag: none;
        user-select:all */
    }
`;

export default GlobalStyles;