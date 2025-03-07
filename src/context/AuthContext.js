import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);  // 로그인 여부
  const [isLoading, setIsLoading] = useState(false);  // 로딩 여부

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setIsLogin(!!accessToken);  // accessToken이 있으면 true, 없으면 false
  }, []);

  const login = (accessToken, refreshToken, userName, profilePictureUrl) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("userName", userName);
    localStorage.setItem("profilePictureUrl", profilePictureUrl);
    setIsLogin(true);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("profilePictureUrl");
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout, isLoading, setIsLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Context를 쉽게 사용할 수 있도록 하는 Hook
export const useAuth = () => useContext(AuthContext);