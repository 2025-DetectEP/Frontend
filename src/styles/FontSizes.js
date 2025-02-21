import { css } from "styled-components";
import media from "./media";

export const fontSizes = {
  titleHead1Bold: css`
    font-family: "GyeonggiTitleBold";
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    font-size: 52px;

    ${media.large`
      font-size: 52px;
    `}
    ${media.small`
      font-size: 48px;
    `}
  `,

  titleHead2bold: css`
    font-family: "GyeonggiTitleBold";
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    font-size: 36px;

    ${media.large`
      font-size: 36px;
    `}
    ${media.small`
      font-size: 32px;
    `}
  `,

  titleHead2Medium: css`
    font-family: "GyeonggiTitleMedium";
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    font-size: 36px;

    ${media.large`
      font-size: 36px;
    `}
    ${media.small`
      font-size: 32px;
    `}
  `,

  titleHead3Bold: css`
    font-family: "GyeonggiTitleBold";
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    font-size: 28px;

    ${media.large`
      font-size: 28px;
    `}
    ${media.small`
      font-size: 24px;
    `}
  `,

  titleSubhead1Light: css`
    font-family: "GyeonggiTitleLight";
    font-style: normal;
    font-weight: 300;
    line-height: 120%;
    font-size: 32px;

    ${media.large`
      font-size: 32px;
    `}
    ${media.small`
      font-size: 28px;
    `}
  `,

  titleSubhead2Light: css`
    font-family: "GyeonggiTitleLight";
    font-style: normal;
    font-weight: 300;
    line-height: 120%;
    font-size: 24px;

    ${media.large`
      font-size: 24px;
    `}
    ${media.small`
      font-size: 20px;
    `}
  `,

  titleSubhead3Light: css`
    font-family: "GyeonggiTitleLight";
    font-style: normal;
    font-weight: 300;
    line-height: 120%;
    font-size: 18px;

    ${media.large`
      font-size: 18px;
    `}
    ${media.small`
      font-size: 14px;
    `}
  `,

  body1Bold: css`
    font-family: "NotoSansBold";
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    font-size: 28px;

    ${media.large`
      font-size: 28px;
    `}
    ${media.small`
      font-size: 24px;
    `}
  `,
  
  body1Medium: css`
    font-family: "NotoSansMedium";
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    font-size: 28px;

    ${media.large`
      font-size: 28px;
    `}
    ${media.small`
      font-size: 24px;
    `}
  `,
  
  body2Medium: css`
    font-family: "NotoSansMedium";
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    font-size: 20px;

    ${media.large`
      font-size: 20px;
    `}
    ${media.small`
      font-size: 20px;
    `}
  `,

  body3Regular: css`
    font-family: "NotoSansRegular";
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    font-size: 16px;

    ${media.large`
      font-size: 16px;
    `}
    ${media.small`
      font-size: 16px;  // 미지정
    `}
  `,

  bdCaption1Medium: css`
    font-family: "NotoSansMedium";
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    font-size: 14px;

    ${media.large`
      font-size: 14px;
    `}
    ${media.small`
      font-size: 14px;  // 미지정
    `}
  `,

  bdCaption2Light: css`
    font-family: "NotoSansLight";
    font-style: normal;
    font-weight: 300;
    line-height: 140%;
    font-size: 12px;

    ${media.large`
      font-size: 12px;
    `}
    ${media.small`
      font-size: 12px;
    `}
  `,

  btnTitle1Bold: css`
    font-family: "NotoSansBold";
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-size: 20px;

    ${media.large`
      font-size: 20px;
    `}
    ${media.small`
      font-size: 20px;
    `}
  `,

  btnTitle2Bold: css`
    font-family: "NotoSansBold";
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-size: 16px;

    ${media.large`
      font-size: 16px;
    `}
    ${media.small`
      font-size: 16px;
    `}
  `,

  btnTitle2Medium: css`
    font-family: "NotoSansMedium";
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 16px;

    ${media.large`
      font-size: 16px;
    `}
    ${media.small`
      font-size: 16px;
    `}
  `,

  btnCaption1Medium: css`
    font-family: "NotoSansMedium";
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    font-size: 14px;

    ${media.large`
      font-size: 14px;
    `}
    ${media.small`
      font-size: 14px;
    `}
  `,
};