import React, { useContext, useEffect, useRef, useState } from 'react';
import * as S from "./CustomAnalysisStyled";
import ToggleBtn from '../common/Buttons/ToggleBtn';
import PostToggleBtn from '../common/Buttons/PostToggleBtn';
import LinkBtn from '../common/Buttons/LinkBtn';
import Button8Large from '../common/Buttons/Button8Large';
import TextTooltip from '../common/Analysis/TextTooltip';
import ImageAnalysisInform from '../common/Analysis/ImageAnalysisInform';
import LeftBtn from '../common/Buttons/LeftBtn';
import RightBtn from '../common/Buttons/RightBtn';
import CircleLeftBtn from '../common/Buttons/CircleLeftBtn';
import CircleRightBtn from '../common/Buttons/CircleRightBtn';

export default function CustomAnalysis({setIsCustomAnalysis}) {
  const [isOriginal, setIsOriginal] = useState(true); // 원본글: ture, 수정본: false
  const [isImgAnalysis, setIsImgAnalysis] = useState(false);  // 이미지 분석(true: 발견, false: 발견X)
  const [isTextAnalysis, setIsTextAnalysis] = useState(false); // 텍스트 분석(true: 발견, flase: 발견X)
  const [isText, setIsText] = useState(false);  // 게시물에 글이 있는지 없는지

  // 모달 열리면 스크롤 막음
  useEffect(() => {
    const scrollY = window.scrollY; // 현재 스크롤 위치 저장

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%"; // 모바일 흔들림 방지

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY); // 원래 위치로 복구
    };
  }, []);

  // 이미지 슬라이드
  const postImages = [
    "SampleImage45.png",
    "SampleImage11.png",
    "SampleImage169.png",
  ]
  const [currentIndex, setCurrentIndex] = useState(0);  // 이미지 현재 인덱스값
  const length = postImages.length; // 이미지 개수
  
  const handleNextSlide = () => { // 다음 이미지 버튼
    console.log("다음")
    if(currentIndex < length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handlePrevSlide = () => { // 이전 이미지 버튼
    console.log("이전")
    if(currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

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
          <S.CloseBtn onClick={() => setIsCustomAnalysis(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M18.0001 15.8791L25.4251 8.4541L27.5461 10.5751L20.1211 18.0001L27.5461 25.4251L25.4251 27.5461L18.0001 20.1211L10.5751 27.5461L8.4541 25.4251L15.8791 18.0001L8.4541 10.5751L10.5751 8.4541L18.0001 15.8791Z" fill="white"/>
            </svg>
          </S.CloseBtn>
        </S.TopContainer>
        <S.PostContainer>
          <S.ImageContainer>
            <ImageAnalysisInform isImgAnalysis={isImgAnalysis} />
            <S.ImageSlideBtns $currentIndex={currentIndex} $length={length}>
              <span className='prevBtn'><CircleLeftBtn onClick={handlePrevSlide} /></span>
              <span className='nextBtn'><CircleRightBtn onClick={handleNextSlide} /></span>
            </S.ImageSlideBtns>
              {length > 1 && 
                <S.ImageNum>
                  <span className='current'>{currentIndex+1}</span><span className='length'>&nbsp;/ {length}</span>
                  </S.ImageNum>
              }
            <S.Img>
              {postImages.map((data, index) => {
                return (
                  <div key={index} className={index === currentIndex ? 'slide active' : 'slide'}>
                    {index === currentIndex && 
                      <img src={data} alt="post_img" className='image' />
                    }
                  </div>
                )
              })}
            </S.Img>
          </S.ImageContainer>
          <S.PostActionContainer>
            {isText ?
              isTextAnalysis ?
                <>
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
                          <S.Notice>AI를 통해 검출된 개인정보를 모두 제외하고 글을 재구성했습니다.</S.Notice>
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
                </>
              :
                <S.NotFindText>
                  <S.Notice>텍스트에는 개인정보가 발견되지 않았어요. 사진에서 발견된 개인정보를 확인해 보세요.</S.Notice>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odio voluptates laudantium. Voluptates sit, quis, ipsam numquam reiciendis, aliquid nam animi a aut nostrum voluptate quisquam ipsum? Provident, distinctio veritatis?
                </S.NotFindText>
            :
              <S.NoText>
                글이 없는 게시물입니다.
              </S.NoText>
            }
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
