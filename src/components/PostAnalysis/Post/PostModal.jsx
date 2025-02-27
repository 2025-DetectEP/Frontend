import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import '../../../App.css';
import media from '../../../styles/media';
import { fontSizes } from "../../../styles/FontSizes";
import * as S from "./PostModalStyled";
import { postAnalysisFilterData } from '../../../constants/postAnalysisFilterData';
import { useBtnInteraction } from '../../../hooks/useBtnInteraction';
import ToggleBtn from '../../common/Buttons/ToggleBtn';
import PostToggleBtn from '../../common/Buttons/PostToggleBtn';
import LinkBtn from '../../common/Buttons/LinkBtn';
import Button8Large from '../../common/Buttons/Button8Large';
import TextTooltip from '../../common/Etc/TextTooltip';

export default function PostModal({setIsPostClick}) {
  const [isOriginal, setIsOriginal] = useState(true); // 원본글: ture, 수정본: false

  // 텍스트 복사
  const copyRef = useRef(); // 복사할 텍스트

  const handleCopyText = () => {
    if(copyRef.current) {
      const copyText = copyRef.current.textContent;

      navigator.clipboard.writeText(copyText)
        .then(() => alert("복사되었습니다."))
        .catch(err => console.error("복사 실패:", err));
    }
  };

  return (
    <S.Main>
      <S.PostModalContainer>
        <S.TopContainer>
          <S.ToggleContainer>
            <span>개인정보가 발견된 사진만 보기</span>
            <ToggleBtn />
          </S.ToggleContainer>
          <S.CloseBtn onClick={() => setIsPostClick(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M18.0001 15.8791L25.4251 8.4541L27.5461 10.5751L20.1211 18.0001L27.5461 25.4251L25.4251 27.5461L18.0001 20.1211L10.5751 27.5461L8.4541 25.4251L15.8791 18.0001L8.4541 10.5751L10.5751 8.4541L18.0001 15.8791Z" fill="white"/>
            </svg>
          </S.CloseBtn>
        </S.TopContainer>
        <S.PostContainer>
          <S.ImageContainer>
            <img className='thumbnail' src="SampleImage11.png" alt="" />
            {/* <img className='thumbnail' src="SampleImage45.png" alt="" /> */}
          </S.ImageContainer>
          <S.PostActionContainer>
            <PostToggleBtn isOriginal={isOriginal} setIsOriginal={setIsOriginal} />
            <S.TextContainer>
              {isOriginal ?
                <S.OriginalContainer>
                  <S.OriginalText>
                    <TextTooltip 
                      text="이 문장은 개인정보를 검사를 테스트하는 예제입니다. 예제입니다."
                      errorWords={["이", "개인정보를", "예제입니다."]}
                    />
                  </S.OriginalText>
                </S.OriginalContainer>
              :
                <S.ReviseContainer>
                  <S.ReviseText ref={copyRef}>
                    <div className='notice'>AI를 통해 검출된 개인정보를 모두 제외하고 글을 재구성했습니다.</div>
                    happy
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, dignissimos. Incidunt molestiae nobis possimus. Obcaecati ab earum ipsum atque, iure consectetur accusamus fugit provident voluptatibus veniam, nesciunt eos! Voluptatibus, cupiditate!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, dignissimos. Incidunt molestiae nobis possimus. Obcaecati ab earum ipsum atque, iure consectetur accusamus fugit provident voluptatibus veniam, nesciunt eos! Voluptatibus, cupiditate!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, dignissimos. Incidunt molestiae nobis possimus. Obcaecati ab earum ipsum atque, iure consectetur accusamus fugit provident voluptatibus veniam, nesciunt eos! Voluptatibus, cupiditate!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, dignissimos. Incidunt molestiae nobis possimus. Obcaecati ab earum ipsum atque, iure consectetur accusamus fugit provident voluptatibus veniam, nesciunt eos! Voluptatibus, cupiditate!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, dignissimos. Incidunt molestiae nobis possimus. Obcaecati ab earum ipsum atque, iure consectetur accusamus fugit provident voluptatibus veniam, nesciunt eos! Voluptatibus, cupiditate!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, dignissimos. Incidunt molestiae nobis possimus. Obcaecati ab earum ipsum atque, iure consectetur accusamus fugit provident voluptatibus veniam, nesciunt eos! Voluptatibus, cupiditate!
                  </S.ReviseText>
                  <Button8Large onClick={handleCopyText} title={'복사하기'} />
                </S.ReviseContainer>
              }
            </S.TextContainer>
            <div className='linkBtn'>
              <LinkBtn
                title='해당 게시물로 이동하기'
                url='https://naver.com'   // 임시
              />
            </div>
          </S.PostActionContainer>
        </S.PostContainer>
      </S.PostModalContainer>
    </S.Main>
  );
}
