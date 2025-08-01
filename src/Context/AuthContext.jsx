import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setIsloggedIn(true);
    setUser(userData);
  };

  const logOut = () => {
    setIsloggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
