import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Noto Sans', sans-serif;
    }

    .title-head1-bold {
        font-family: 'GyeonggiTitleBold', serif;
        font-size: 52px; /* large */
    }
    .title-head1-bold-small {
        font-family: 'GyeonggiTitleBold', serif;
        font-size: 48px; /* small */
    }

    .title-head2-bold {
        font-family: 'GyeonggiTitleBold', serif;
        font-size: 36px; /* large */
    }
    .title-head2-bold-small {
        font-family: 'GyeonggiTitleBold', serif;
        font-size: 32px; /* small */
    }

    .title-head2-medium {
        font-family: 'GyeonggiTitleMedium', serif;
        font-size: 36px; /* large */
    }
    .title-head1-medium-small {
        font-family: 'GyeonggiTitleMedium', serif;
        font-size: 32px; /* small */
    }

    .title-head3-bold {
        font-family: 'GyeonggiTitleBold', serif;
        font-size: 28px; /* large */
    }
    .title-head3-bold-small {
        font-family: 'GyeonggiTitleBold', serif;
        font-size: 24px; /* small */
    }

    .title-subhead1-light {
        font-family: 'GyeonggiTitleLight', serif;
        font-size: 32px; /* large */
    }
    .title-subhead1-light-small {
        font-family: 'GyeonggiTitleLight', serif;
        font-size: 28px; /* small */
    }

    .title-subhead2-light {
        font-family: 'GyeonggiTitleLight', serif;
        font-size: 24px; /* large */
    }
    .title-subhead2-light-small {
        font-family: 'GyeonggiTitleLight', serif;
        font-size: 20px; /* small */
    }

    .title-subhead3-light {
        font-family: 'GyeonggiTitleLight', serif;
        font-size: 18px; /* large */
    }
    .title-subhead3-light-small {
        font-family: 'GyeonggiTitleLight', serif;
        font-size: 14px; /* small */
    }

    .body-subhead1-light {
        font-family: 'GyeonggiTitleLight', serif;
        font-size: 32px; /* large */
    }
    .body-subhead1-light-small {
        font-family: 'GyeonggiTitleLight', serif;
        font-size: 28px; /* small */
    }
`;

export default GlobalStyles;