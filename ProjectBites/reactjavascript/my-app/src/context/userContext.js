import React, { useState } from "react";

const UserContext = React.createContext(null);
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    isAuthenticated: false,
    token: "",
    account: {},
  });
  const loginContext = (userData) => {
    setUser(userData);
  };
  const logout = () => {
    setUser((user) => ({
      name: "",
      auth: false,
    }));
  };
  return (
    <UserContext.Provider value={{ user, loginContext, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserProvider, UserContext };
