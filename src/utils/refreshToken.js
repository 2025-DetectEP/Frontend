import axios from "axios";

const refreshToken = async() => {
  const storedRefreshToken = localStorage.getItem("refreshToken");
  if (!storedRefreshToken) throw new Error("리프레시 토큰 없음");

  console.log('리프: ', storedRefreshToken);

  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/token`, {
      headers: { 
        "accept": "application/json",
        "Authorization-Refresh": `Bearer ${storedRefreshToken}`,
      }
    })
    if (response.data?.code === 201) {  // 토큰 재발급 성공
      console.log(response.data?.code, ': ', response.data?.message);

      const newAccessToken = response?.data.data.accessToken;
      const newRefreshToken = response?.data.data.refreshToken;
      
      localStorage.setItem("accessToken", newAccessToken);
      localStorage.setItem("refreshToken", newRefreshToken);

      return newAccessToken;
    } else {  // 토큰 재발급 실패
      console.log(response.data?.code, ': ', response.data?.message);
      return null;
    }
  } catch (error) { // API 에러 발생
      console.error('토큰 재발급 API 에러 발생: ', error);
      return null;
  }
};

export default refreshToken;