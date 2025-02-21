import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setIsLogin(!!accessToken);  // accessToken이 있으면 true, 없으면 false
  }, []);

  const login = (accessToken) => {
    localStorage.setItem("accessToken", accessToken);
    setIsLogin(true);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Context를 쉽게 사용할 수 있도록 하는 Hook
export const useAuth = () => useContext(AuthContext);