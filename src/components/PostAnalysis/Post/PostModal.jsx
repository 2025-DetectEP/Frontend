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
import TextTooltip from '../../common/Analysis/TextTooltip';
import ImageAnalysisInform from '../../common/Analysis/ImageAnalysisInform';
import LeftBtn from '../../common/Buttons/LeftBtn';
import RightBtn from '../../common/Buttons/RightBtn';
import CircleLeftBtn from '../../common/Buttons/CircleLeftBtn';
import CircleRightBtn from '../../common/Buttons/CircleRightBtn';
import { ReactComponent as IconLeftEnabled } from '../../../assets/icons/icon_left_enabled.svg'
import { ReactComponent as IconLeftHover } from '../../../assets/icons/icon_left_hover.svg'
import { ReactComponent as IconLeftPressed } from '../../../assets/icons/icon_left_pressed.svg'
import { useAuth } from '../../../context/AuthContext';
import axios from 'axios';
import refreshToken from '../../../utils/refreshToken';

export default function PostModal({setIsPostClick, postId}) {
  const { setIsLoading } = useAuth();
  const [isOriginal, setIsOriginal] = useState(true); // 원본글: ture, 수정본: false
  const [isImgAnalysis, setIsImgAnalysis] = useState(false);  // 이미지 분석(true: 발견, false: 발견X)
  const [isTextAnalysis, setIsTextAnalysis] = useState(true); // 텍스트 분석(true: 발견, flase: 발견X)
  const [isText, setIsText] = useState(true);  // 게시물에 글이 있는지 없는지

  const [postData, setPostData] = useState([]); // 게시물
  const [message, setMessage] = useState(''); // 게시물 메시지
  const [safeMessage, setSafeMessage] = useState(''); // 게시물 수정 메시지
  const [permalinkUrl, setPermalinkUrl] = useState(''); // 게시물 url
  const [detectMessageKeywords, setDetectMessageKeywords] = useState([]); // 메시지에서 탐지된 키워드
  const [photoData, setPotoData] = useState([]); // 게시물 사진
  const [photoUrl, setPhotoUrl] = useState([]); // 게시물 사진 url
  const [detectPhotoKeywords, setDetectPhotoKeywords] = useState([]); // 사진에서 탐지된 키워드
  
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

  // 게시물 가져오기
  useEffect(() => {
    getPost();
  }, []);

  const getPost = async() => {
    setIsLoading(true); // 요청 시작 시 로딩 상태 활성화

    try {
      let accessToken = localStorage.getItem("accessToken");

      let response = await axios.get(`${process.env.REACT_APP_API_URL}/feed/${postId}`, {
        headers: {
          "accept": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        }
      })
      if (response.data?.code === 200) { // 요청 완료
        console.log(response.data?.code, ': ', response.data?.message);

        setPostData(response.data?.data);
      } else if (response.data?.code === 403) { // 토큰 만료
        console.log(response.data?.code, ': ', response.data?.message);

        // 토큰 재발급 후 다시 요청
        const newToken = await refreshToken();
        if(newToken) {
          console.log('새 토큰으로 요청');

          response = await axios.get(`${process.env.REACT_APP_API_URL}/feed/${postId}`, {
            headers: { 
              "accept": "application/json",
              "Authorization": `Bearer ${newToken}`,
            }
          })
          if (response.data?.code === 200) { // 요청 완료
            console.log(response.data?.code, ': ', response.data?.message);
            
            setPostData(response.data?.data);
          } else {  // 요청 실패
            console.log(response.data?.code, ': ', response.data?.message);
          }
        } else {
          console.log("토큰 재발급 실패, API 요청 진행 불가");
        }
      } else {
        console.log(response.data?.code, ': ', response.data?.message);
      }
    } catch (error) { // API 에러 발생
        console.error('API 에러 발생: ', error);
    } finally {
      setIsLoading(false); // 요청이 끝나면 로딩 해제
    }
  };  

  useEffect(() => {
    if (postData) {
      setMessage(postData.message); // 게시물 메시지
      setSafeMessage(postData.safeMessage); // 게시물 수정 메시지
      setPermalinkUrl(postData.permalinkUrl); // 게시물 url
      setPotoData(postData.photoUrlRes); // 게시물 사진
      setDetectMessageKeywords(postData.messageDetectRes || []); // 메시지에서 탐지된 키워드

      // const keywords = postData.messageDetectRes.map(item => item.keyword) || []; // 메시지에서 탐지된 키워드
      // // 중복 제거
      // const uniqueKeywords = [...new Set(keywords)];
      // setDetectMessageKeywords(uniqueKeywords);
    }
  }, [postData]);

  useEffect(() => { // 메시지에서 탐지된 키워드 있는지 없는지
    console.log(detectMessageKeywords)
    if (Array.isArray(detectMessageKeywords) && detectMessageKeywords.length > 0) {
      setIsTextAnalysis(true);
    } else {
      setIsTextAnalysis(false);
    }
  }, [detectMessageKeywords]);

  useEffect(() => {
    if (postData && postData.photoUrlRes) {
      const urls = photoData.map(item => item.pictureUrl);
      setPhotoUrl(urls);
    }
  }, [photoData]);

  useEffect(() => {
    if (postData && postData.photoUrlRes) {
      const keywords = postData.photoUrlRes.flatMap(item => 
        item.photoDetectRes.map(detect => detect.keyword)
      );
  
      // 중복 제거
      const uniqueKeywords = [...new Set(keywords)];
      setDetectPhotoKeywords(uniqueKeywords);
    }
  }, [photoData]);

  useEffect(() => {
    if (detectPhotoKeywords.length > 0) {
      setIsImgAnalysis(true);
    } else {
      setIsImgAnalysis(false);
    }
  }, [detectPhotoKeywords])

  // 이미지 슬라이드
  const [currentIndex, setCurrentIndex] = useState(0);  // 이미지 현재 인덱스값
  
  const handleNextSlide = () => { // 다음 이미지 버튼
    if(currentIndex < photoUrl.length - 1) setCurrentIndex(currentIndex + 1);
  };
  const handlePrevSlide = () => { // 이전 이미지 버튼
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
          <S.CloseBtn onClick={() => setIsPostClick(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M18.0001 15.8791L25.4251 8.4541L27.5461 10.5751L20.1211 18.0001L27.5461 25.4251L25.4251 27.5461L18.0001 20.1211L10.5751 27.5461L8.4541 25.4251L15.8791 18.0001L8.4541 10.5751L10.5751 8.4541L18.0001 15.8791Z" fill="white"/>
            </svg>
          </S.CloseBtn>
        </S.TopContainer>
        <S.PostContainer>
          <S.ImageContainer>
            <ImageAnalysisInform isImgAnalysis={isImgAnalysis} detectPhotoKeywords={detectPhotoKeywords} />
            <S.ImageSlideBtns $currentIndex={currentIndex} $length={photoUrl.length}>
              <span className='prevBtn'><CircleLeftBtn onClick={handlePrevSlide} /></span>
              <span className='nextBtn'><CircleRightBtn onClick={handleNextSlide} /></span>
            </S.ImageSlideBtns>
              {photoUrl.length > 1 && 
                <S.ImageNum>
                  <span className='current'>{currentIndex+1}</span><span className='length'>&nbsp;/ {photoUrl.length}</span>
                  </S.ImageNum>
              }
            <S.Img>
              {photoUrl.map((data, index) => {
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
                            text={message}
                            errorWords={["이", "개인정보를", "예제입니다."]}
                            detectMessageKeywords={detectMessageKeywords}
                          />
                        </S.OriginalText>
                      </S.OriginalContainer>
                    :
                      <S.ReviseContainer>
                        <S.ReviseText>
                          <S.Notice>AI를 통해 검출된 개인정보를 모두 제외하고 글을 재구성했습니다.</S.Notice>
                          <div ref={copyRef}>
                          {safeMessage}
                          </div>
                        </S.ReviseText>
                        <div className='copyBtn'>
                          <Button8Large onClick={handleCopyText} title={'복사하기'} />
                        </div>
                      </S.ReviseContainer>
                    }
                  </S.TextContainer>
                </>
              :
                <S.NotFindText>
                  <S.Notice>텍스트에는 개인정보가 발견되지 않았어요. 사진에서 발견된 개인정보를 확인해 보세요.</S.Notice>
                  {message}
                </S.NotFindText>
            :
              <S.NoText>
                글이 없는 게시물입니다.
              </S.NoText>
            }
            <div className='linkBtn'>
              <LinkBtn
                title='해당 게시물로 이동하기'
                url={permalinkUrl}
              />
            </div>
          </S.PostActionContainer>
        </S.PostContainer>
      </S.PostModalContainer>
    </S.Main>
  );
}
