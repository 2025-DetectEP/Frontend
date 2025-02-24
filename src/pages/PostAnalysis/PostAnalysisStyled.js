import styled from "styled-components";
import '../../App.css';
import media from '../../styles/media';
import { fontSizes } from "../../styles/FontSizes";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px - 210px + 120px); // 전체 높이 - header 높이 - footer 높이 + custom
`;

export const Section1 = styled.div`
  background-color: ${(props) => props.theme.Background_solid};
  /* padding-top: 7.407vh; */
  padding-left: 12.5vw;
  padding-right: 12.5vw;
  ${media.small`
    /* padding-top: 5.556vh; */
    padding-left: 3.962vw;
    padding-right: 3.962vw;
  `}
`;

export const Section2 = styled.div`
  background-color: ${(props) => props.theme.White};
  /* padding-top: 7.407vh; */
  flex-grow: 1;
  overflow: auto;
  justify-content: center;
  padding-left: 12.5vw;
  padding-right: 12.5vw;
  ${media.small`
    /* padding-top: 5.556vh; */
    padding-left: 3.962vw;
    padding-right: 3.962vw;
  `}
`;