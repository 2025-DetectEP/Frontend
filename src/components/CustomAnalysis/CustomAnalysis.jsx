import React, { useContext, useEffect, useRef, useState } from 'react';
import * as S from "./CustomAnalysisStyled";
import ToggleBtn from '../common/Buttons/ToggleBtn';
import PostToggleBtn from '../common/Buttons/PostToggleBtn';
import LinkBtn from '../common/Buttons/LinkBtn';
import Button8Large from '../common/Buttons/Button8Large';
import TextTooltip from '../common/Analysis/TextTooltip';
import ImageAnalysisInform from '../common/Analysis/ImageAnalysisInform';
import CircleLeftBtn from '../common/Buttons/CircleLeftBtn';
import CircleRightBtn from '../common/Buttons/CircleRightBtn';
import DeleteBtn from '../common/Buttons/DeleteBtn';
import AnalyzingBtn from '../common/Buttons/AnalyzingBtn';

export default function CustomAnalysis({setIsCustomAnalysis}) {
  const [isAnalysis, setIsAnalysis] = useState(false);  // 검사하기 누르기 전 후 여부(기본: false)
  const [isOriginal, setIsOriginal] = useState(true); // 원본글: ture, 수정본: false
  const [isImgAnalysis, setIsImgAnalysis] = useState(false);  // 이미지 분석(true: 발견, false: 발견X)
  const [isTextAnalysis, setIsTextAnalysis] = useState(true); // 텍스트 분석(true: 발견, flase: 발견X)
  const [isText, setIsText] = useState(true);  // 게시물에 글이 있는지 없는지

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

  // 이미지 업로드
  const [postImages, setPostImages] = useState([]);
  const uploadRef = useRef(null);
  const [isImgUpload, setIsImgUpload] = useState(false);  // 이미지 업로드 여부

  const handleUpload = () => {    // 이미지 업로드
    uploadRef.current?.click();
  }

  const handleUploadImg = (event) => { // 선택한 이미지 배열 저장
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      
      filesArray.forEach((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          if (reader.result) {
            setPostImages((prevImages) => [...prevImages, reader.result]);
          }
        };
      });
    }
    setIsImgUpload(true);
  };

  useEffect(() => {
    console.log('post: ', postImages)
  }, [postImages])
  
  // 이미지 슬라이드
  // const postImages = [
  //   "SampleImage45.png",
  //   "SampleImage11.png",
  //   "SampleImage169.png",
  // ]
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

  // 이미지 삭제
  const handleDeleteImg = (index) => {
    console.log("삭제 버튼 클릭됨:", index);
    setPostImages(prev => prev.filter((_, i) => i !== index));

    // 마지막 이미지 삭제 시 앞 이미지로 이동
    if(index === postImages.length - 1) {
        setCurrentIndex(index-1);
    }

    // 모든 이미지 삭제 시(postImages.length === 1) 이미지 업로드 화면 보이기
    if (postImages.length === 1) {
      setIsImgUpload(false);
      setCurrentIndex(0);
    }
  }

  // 텍스트 글자 수 감지
  const [inputCount, setInputCount] = useState(0);
  const handleInputText = (e) => {
    setInputCount(e.target.value.length);
  }

  // 글자수 감지 -> 검사 버튼 활성화
  const [isResultActive, setIsResultActive] = useState(false);
  useEffect(() => {
    if(inputCount > 0) {
      setIsResultActive(true);
    } else {
      setIsResultActive(false);
    }
  }, [inputCount]);

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

  // 검사하기
  const handleAnalysis = () => {
    setIsAnalysis(true);
    console.log(postImages)
  }

  return (
    <S.Main>
      <S.PostModalContainer>
        <S.TopContainer>
          <S.ToggleContainer $isAnalysis={isAnalysis}>
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
          <S.ImageContainer $isAnalysis={isAnalysis} $isImgUpload={isImgUpload}>
            {isAnalysis || isImgUpload ?
              <>
                {isAnalysis &&
                  <ImageAnalysisInform isImgAnalysis={isImgAnalysis} />
                }
                {length > 1 && <>
                  <S.ImageSlideBtns $currentIndex={currentIndex} $length={length}>
                    <span className='prevBtn'><CircleLeftBtn onClick={handlePrevSlide} /></span>
                    <span className='nextBtn'><CircleRightBtn onClick={handleNextSlide} /></span>
                  </S.ImageSlideBtns>
                  <S.ImageNum>
                    <span className='current'>{currentIndex+1}</span><span className='length'>&nbsp;/ {length}</span>
                  </S.ImageNum>
                </>
                }
                <S.Img>
                  {postImages.map((data, index) => {
                    return (
                      <div key={index} className={index === currentIndex ? 'slide active' : 'slide'}>
                        {index === currentIndex && 
                          <>
                            <S.DeleteBtnContainer>
                              <DeleteBtn onClick={() => handleDeleteImg(index)}/>
                            </S.DeleteBtnContainer>
                            <img src={data} alt="post_img" className='image' />
                          </>
                        }
                      </div>
                    )
                  })}
                </S.Img>
              </>
            :
              <>
                <S.SelectContainer>
                  <S.SelectDescription>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <path d="M70.0003 50V60H80.0003V66.6667H70.0003V76.6667H63.3337V66.6667H53.3337V60H63.3337V50H70.0003ZM70.027 10C71.8537 10 73.3337 11.4833 73.3337 13.31V44.4733C71.1924 43.717 68.9379 43.3315 66.667 43.3333V16.6667H13.3337L13.337 63.3333L44.3103 32.3567C44.8835 31.7816 45.6471 31.4358 46.4573 31.3842C47.2676 31.3326 48.0689 31.5789 48.7103 32.0767L49.0203 32.36L60.8403 44.1933C58.2558 44.9809 55.8575 46.2837 53.7901 48.0232C51.7227 49.7627 50.029 51.9029 48.8112 54.3147C47.5933 56.7265 46.8764 59.3599 46.7038 62.0563C46.5313 64.7526 46.9065 67.4559 47.807 70.0033L9.97366 70C9.09637 69.9991 8.25531 69.65 7.63529 69.0293C7.01527 68.4087 6.66699 67.5673 6.66699 66.69V13.31C6.67309 12.4346 7.02333 11.5967 7.64204 10.9774C8.26074 10.3581 9.09826 10.007 9.97366 10H70.027ZM26.667 23.3333C28.4351 23.3333 30.1308 24.0357 31.381 25.286C32.6313 26.5362 33.3337 28.2319 33.3337 30C33.3337 31.7681 32.6313 33.4638 31.381 34.714C30.1308 35.9643 28.4351 36.6667 26.667 36.6667C24.8989 36.6667 23.2032 35.9643 21.9529 34.714C20.7027 33.4638 20.0003 31.7681 20.0003 30C20.0003 28.2319 20.7027 26.5362 21.9529 25.286C23.2032 24.0357 24.8989 23.3333 26.667 23.3333V23.3333Z" fill="#181A1C"/>
                    </svg>
                    <div>검사하실 사진을 올려주세요.</div>
                  </S.SelectDescription>
                  <S.SelectBtn>
                    <input 
                      ref={uploadRef}
                      style={{display: 'none'}}
                      type='file'
                      accept='image/*'
                      multiple
                      onChange={handleUploadImg}
                    />
                    <button onClick={handleUpload}>파일 업로드</button>
                  </S.SelectBtn>
                </S.SelectContainer>
              </>
            }
          </S.ImageContainer>
          <S.PostActionContainer>
            {isAnalysis ?
              <>
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
                            <S.ReviseText>
                              <S.Notice>AI를 통해 검출된 개인정보를 모두 제외하고 글을 재구성했습니다.</S.Notice>
                              <div ref={copyRef}>
                                happy
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, dignissimos. Incidunt molestiae nobis possimus. Obcaecati ab earum ipsum atque, iure consectetur accusamus fugit provident voluptatibus veniam, nesciunt eos! Voluptatibus, cupiditate!
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, dignissimos. Incidunt molestiae nobis possimus. Obcaecati ab earum ipsum atque, iure consectetur accusamus fugit provident voluptatibus veniam, nesciunt eos! Voluptatibus, cupiditate!
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, dignissimos. Incidunt molestiae nobis possimus. Obcaecati ab earum ipsum atque, iure consectetur accusamus fugit provident voluptatibus veniam, nesciunt eos! Voluptatibus, cupiditate!
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, dignissimos. Incidunt molestiae nobis possimus. Obcaecati ab earum ipsum atque, iure consectetur accusamus fugit provident voluptatibus veniam, nesciunt eos! Voluptatibus, cupiditate!
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, dignissimos. Incidunt molestiae nobis possimus. Obcaecati ab earum ipsum atque, iure consectetur accusamus fugit provident voluptatibus veniam, nesciunt eos! Voluptatibus, cupiditate!
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, dignissimos. Incidunt molestiae nobis possimus. Obcaecati ab earum ipsum atque, iure consectetur accusamus fugit provident voluptatibus veniam, nesciunt eos! Voluptatibus, cupiditate!
                              </div>
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
                  title='내 SNS로 이동하기'
                  url='https://naver.com'   // 임시
                />
              </div>
            </>
          :
            <>
              <S.InputText>
                <textarea
                  maxLength={2000}
                  placeholder='검사하실 텍스트를 작성해 주세요.'
                  onChange={handleInputText}
                />
                <div><span className='count'>{inputCount}</span> / 2000</div>
              </S.InputText>
              <div className='linkBtn'>
                <AnalyzingBtn title='검사하기' onClick={handleAnalysis} isActive={isResultActive} />
              </div>
            </>
          }
          </S.PostActionContainer>
        </S.PostContainer>
      </S.PostModalContainer>
    </S.Main>
  );
}