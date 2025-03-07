import React, { useContext, useEffect, useRef, useState } from 'react';
import * as S from "./PostAnalysisStyled";
import theme from '../../styles/theme';
import PostAnalysisSection1 from '../../components/PostAnalysis/PostAnalysisSection1';
import PostAnalysisSection2 from '../../components/PostAnalysis/PostAnalysisSection2';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import refreshToken from '../../utils/refreshToken';

export default function PostAnalysis() {
  const { setIsLoading } = useAuth();
  const [isPost, setIsPost] = useState(false);  // 게시물 존재 여부
  // const [postCount, setPostCount] = useState(112);   // 게시물 개수
  const [analysisCount, setAnalysisCount] = useState(20);   // 개인정보 포함된 게시물 개수
  const [dangerDegree, setDangerDegree] = useState(1) ;  // 1:낮음, 2:보통, 3:높음 (섹션1에 사용)

  const [feedData, setFeedData] = useState([]);
  const [averageDangerScore, setAverageDangerScore] = useState(null); // 위험도
  const [detectPostCount, setDetectPostCount] = useState(null); // 유출된 게시물 개수
  const [totalPostCount, setTotalPostCount] = useState(null); // 전체 게시물 개수
  // const [averageDangerScore, setAverageDangerScore] = useState(null);
  // const [averageDangerScore, setAverageDangerScore] = useState(null);
  const [postData, setPostData] = useState([]);

  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) return;
    didMount.current = true;
    getFeed();
  }, []);

  const getFeed = async() => {
    setIsLoading(true); // 요청 시작 시 로딩 상태 활성화

    try {
      let accessToken = localStorage.getItem("accessToken");

      let response = await axios.get(`${process.env.REACT_APP_API_URL}/feed/?page=0&size=100`, {
        headers: { 
          "accept": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        }
      })
      if (response.data?.code === 200) { // 요청 완료
        console.log(response.data?.code, ': ', response.data?.message);

        setFeedData(response.data?.data);
      } else if (response.data?.code === 403) { // 토큰 만료
        console.log(response.data?.code, ': ', response.data?.message);

        // 토큰 재발급 후 다시 요청
        const newToken = await refreshToken();
        if(newToken) {
          console.log('새 토큰으로 요청');

          response = await axios.get(`${process.env.REACT_APP_API_URL}/feed/?page=0&size=100`, {
            headers: { 
              "accept": "application/json",
              "Authorization": `Bearer ${newToken}`,
            }
          })
          if (response.data?.code === 200) { // 요청 완료
            console.log(response.data?.code, ': ', response.data?.message);
            
            setFeedData(response.data?.data);
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

  useEffect(()=>{
    setTotalPostCount(feedData.totalPostCount);  // 전체 게시물 개수
    setDetectPostCount(feedData.detectPostCount);  // 유출된 게시물 개수
    setAverageDangerScore(feedData.averageDangerScore);  // 위험도
    setPostData(feedData?.fbPostResPage?.data || []);
  }, [feedData])

  // 게시물 존재 여부
  useEffect(() => {
    if (totalPostCount > 0) {  // 게시물 있음
      setIsPost(true);
      // setPostCount(postData.length);  // 게시물 개수
    } else {  // 게시물 없음
      setIsPost(false);
    }
  }, [totalPostCount]);

  // 게시물 위험도 측정
  useEffect(() => {
    if (averageDangerScore <= 19) {
      setDangerDegree(1);
    } else if (averageDangerScore >= 20 && averageDangerScore <=29) {
      setDangerDegree(2);
    } else {
      setDangerDegree(3);
    }
  }, [averageDangerScore])

  return (
    <S.Main>
      <S.Section1>
        <PostAnalysisSection1 
          isPost={isPost}
          postCount={totalPostCount}
          analysisCount={detectPostCount}
          dangerDegree={dangerDegree}
        />
      </S.Section1>

      <S.Section2>
        <PostAnalysisSection2 
          isPost={isPost}
          postCount={totalPostCount}
          analysisCount={detectPostCount}
          postData={postData}
        />
      </S.Section2>
    </S.Main>
  );
}